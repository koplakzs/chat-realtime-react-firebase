import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));
  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div
          className="user mb-2 pb-2 pt-2 gap-3 d-flex align-items-center"
          role="button"
          tabIndex={0}
          key={chat[0]}
        >
          <img
            src={chat[1].userInfo.photoURL}
            alt=""
            className="rounded-circle border-0 ms-2"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
            }}
          />
          <div className="user-info m-0">
            <p className="m-0 fw-medium" style={{ fontSize: "14pt" }}>
              {chat[1].userInfo.displayName}
            </p>
            <p className="text-secondary m-0 " style={{ fontSize: "10pt" }}>
              {chat[1].userInfo.lastMessage?.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
