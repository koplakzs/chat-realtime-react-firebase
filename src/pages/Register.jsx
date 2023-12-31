import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            }); //set di firebase dengan collection users, dengan document sesuai nama uid serta ada field displayName, email, photoUrl, uid
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="register container">
      <div className="form bg-light p-5 rounded-5 text-center">
        <h3 className="fw-bold">Welcome To Realtime Chat</h3>
        <p>Register</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control border-0 border-bottom shadow-none bg-light"
              id="name"
              placeholder="Display Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control border-0 border-bottom shadow-none bg-light"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control border-0 border-bottom shadow-none bg-light"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3 text-start">
            <input type="file" id="file" className="d-none" />
            <label
              htmlFor="file"
              role="button"
              tabIndex={0}
              className="fw-light"
              style={{ fontSize: "11pt" }}
            >
              <i
                className="bi bi-person-plus ms-2 me-4"
                style={{ fontSize: "20pt" }}
              ></i>
              Chose Your Avatar
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3 mb-3 col-12">
            Register
          </button>
          {error ? <span>Somwthing Error</span> : ""}
        </form>
        <p>
          Sudah ada akun ??<Link to="/login"> Login Skuy </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
