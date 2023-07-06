/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`d-flex mt-4 ms-4 me-4 ${
        message.senderId === currentUser.uid && "flex-row-reverse"
      } `}
    >
      <div className="me-4 ms-4">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="rounded-circle border-0"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
        <p className="mt-1 fw-light">Just Now</p>
      </div>
      <div className="info-message d-flex flex-column">
        <p
          className={` p-2 ps-3 pe-3 rounded-3 ${
            message.senderId === currentUser.uid
              ? "bg-success text-light"
              : "bg-dark-subtle"
          }`}
        >
          {message.text}
        </p>
        {message.image && (
          <img
            src={message.image}
            alt=""
            className="border-0 "
            style={{
              height: "200px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Message;
