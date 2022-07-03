import React, { useState } from "react";


export default function Login() {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      userEmail,
      userPassword,
    };
    setUser(userData);
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <div className="Login">
      <p>Login</p>

      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={handelSubmit}
      >
        <input
          type="text"
          placeholder="name"
          onChange={(event) => setUserName(event.target.value)}
        />

        <input
          type="email"
          placeholder="email"
          onChange={(event) => setUserEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(event) => setUserPassword(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <div>{user && JSON.stringify(user, null, 3)}</div>
      {/* <Dog parentToChild={data} /> */}
     
    </div>
  );
}
