import React, { useContext } from "react";
import "./Dog.css";
// import UserContext from "../context";

import UserContext from '../context'
import UserInput from '../UserInput/UserInput'
import UserOutPut from '../UserOutPut/UserOutPut'


export default function Dog() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {/* <h1>{user.auth ?<UserOutPut/>:<UserInput/>}</h1> */}
      {user.name || "no name"}
      <p>dog</p>
      <img
        src="https://i.pinimg.com/550x/74/3f/1c/743f1c688f78bd420865b4dff5be27d8.jpg
        "
        className="dog"
        alt="dog"
      ></img>
    </div>
  );
}
