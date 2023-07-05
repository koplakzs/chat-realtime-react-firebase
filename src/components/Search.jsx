import { useContext, useEffect, useState } from "react";

import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
const Search = () => {
  // const [chats, setChats] = useState([]);
  const { dispatch } = useContext(ChatContext);
  // useEffect(() => {
  //   const getChats = () => {
  //     const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
  //       setChats(doc.data());
  //     });

  //     return () => {
  //       unsub();
  //     };
  //   };
  //   currentUser.uid && getChats();
  // }, [currentUser.uid]);

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleClick = async (u) => {
    dispatch({
      type: "CHANGE_USER",
      payload: u,
    });
    // check group chats di firestore
    const combineId =
      currentUser.uid > user.id
        ? currentUser.uid + user.id
        : user.id + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combineId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combineId), { messages: [] });

        //create user chat
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err);
    }
    setUser(null);
    setUsername("");
  };
  return (
    <div>
      <div className="search">
        <input
          className="form-control me-2 bg-transparent shadow-none"
          type="search"
          placeholder="Find a User"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <p className="m-0"> Nama Tidak Ditemukan </p>}
      {user && (
        <div
          className="user mb-2 pb-2 pt-2 gap-3 d-flex align-items-center border-bottom border-secondary "
          role="button"
          tabIndex={0}
          onClick={() => handleClick(user)}
        >
          <img
            src={user.photoURL}
            alt=""
            className="rounded-circle border-0 ms-2"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
            }}
          />
          <p className="m-0"> {user.displayName} </p>
        </div>
      )}
    </div>
  );
};

export default Search;
