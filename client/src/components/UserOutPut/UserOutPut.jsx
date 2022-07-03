import React, { useContext } from "react";
import UserContext from "../context";

const UserOutPut = () => {
  const { logout, user } = useContext(UserContext);

  return (
    <>
      <h1> hello, {user.name}</h1>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default UserOutPut;
