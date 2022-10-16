import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';



export default function Navbar() {
  return (

    <div className="navBarDiv">
      <nav className="navBar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </div>
  );

}