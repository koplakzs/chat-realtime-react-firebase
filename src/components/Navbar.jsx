import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xxl bg-light-subtle">
      <div className="container-fluid">
        <p className="navbar-brand m-0 fw-bold">LemperChat</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-3 align-items-center">
            <img
              src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              alt=""
              className="rounded-circle border-0"
              style={{
                width: "25px",
                height: "25px",
                objectFit: "cover",
              }}
            />
            <p className="name m-0">Your Name</p>
            <button
              className="log-out btn btn-danger btn-sm"
              onClick={() => signOut(auth)}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
