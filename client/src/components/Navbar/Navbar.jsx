import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dog">Dog</a>
        </li>
        <li>
          <a href="/zoro">Zoro</a>
        </li>
        <li>
          <a href="/Login">Login</a>
        </li>
        <li>
          <a href="/Register">Register</a>
        </li>
      </ul>
    </div>
  );
}
