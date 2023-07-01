import React from "react";
import Sidebar from "../components/sidebar";
import Chat from "../components/Chat";
import "../App.css";
const Home = () => {
  return (
    <div className="home bg-light d-flex rounded-3 overflow-hidden">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
