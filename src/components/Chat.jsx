import { useContext } from "react";
import Input from "./Input";
import Messages from "./Messages";
import { ChatContext } from "../context/ChatContext";
const onClick = () => alert("Comming Soon...");
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="bg-light col">
      <div className="bg-body-secondary d-flex justify-content-between align-items-center pt-2 pb-2">
        <p className="m-0 ms-4 fs-5"> {data.user?.displayName} </p>
        <div
          className="chatIcons me-5 d-flex gap-4 fs-5"
          role="button"
          tabIndex={0}
        >
          <i className="bi bi-camera-video-fill" onClick={onClick}></i>
          <i className="bi bi-person-fill-add" onClick={onClick}></i>
          <i className="bi bi-three-dots" onClick={onClick}></i>
        </div>
      </div>
      <div className="chating">
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default Chat;
