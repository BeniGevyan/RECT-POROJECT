import React, { useState, useContext } from "react";
import UserContext from "../context";

const UserInput = () => {
  const { login } = useContext(UserContext);

  const [name, setName] = useState("");

  return (
    <>
      <h1>Please, log in!</h1>

      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={() => login(name)}>Log in</button>
    </>
  );
};

export default UserInput;
