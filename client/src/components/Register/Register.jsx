import React, { useState } from "react";

export default function Register() {
    const [user, setUser] = useState(null)
  const [form, setForm] = useState({
    user: "",
    email: "",
    password: "",
  });

  const handalChange = (e) => {
    setForm({
        ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit=(e)=>{
      e.preventDefault()
      setUser(form)
  }

  return (
    <div className="Register">
      <p>Register</p>
      <form
      onSubmit={ handleSubmit}

        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input type="text" placeholder="name" name="user" onChange={ handalChange} />

        <input type="email" placeholder="email" name="email" onChange={ handalChange}/>

        <input type="password" placeholder="password" name="password" onChange={ handalChange} />

        <button type="submit">Submit</button>
      </form>
      <div>
          {user && JSON.stringify(user,null,2)}
      </div>
    </div>
  );
}
