import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="register container">
      <div className="form bg-light p-5 rounded-5 text-center">
        <h3 className="fw-bold">Welcome To Realtime Chat</h3>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary mt-3 mb-3 col-12">
            Login
          </button>
          {error ? <span>Something Error</span> : ""}
        </form>

        <p>
          Belum ada akun ?? <Link to="/register">Register Skuy </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
