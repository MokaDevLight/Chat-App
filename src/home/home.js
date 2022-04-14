import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

function Homepage({ socket }) {
  const [username, setusername] = useState("");
  const [roomname, setroomname] = useState("");

  const sendData = () => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname });
    } else {
      alert("username and roomname are must !");
      window.location.reload();
    }
  };

  return (
    <div className="homepage">
      <h1>ChatApp</h1>
      <h4>Welcome</h4>
      <input
        placeholder="user name"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      ></input>
      <input
        placeholder="room name"
        value={roomname}
        onChange={(e) => setroomname(e.target.value)}
      ></input>
      <Link to={`/chat/${roomname}/${username}`}>
        <button onClick={sendData}>Login</button>
      </Link>
    </div>
  );
}

export default Homepage;
