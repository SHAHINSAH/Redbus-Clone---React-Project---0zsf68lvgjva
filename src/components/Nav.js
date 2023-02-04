import React from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  const nav1 = useNavigate();
  const nav5 = useNavigate();
  const nav6 = useNavigate();
  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img src="redbus_logo.png" alt="redbus" />
      </div>
      <div id="navbar-right">
        <a href="#" onClick={()=>nav1("/")}>Home</a>
        <a href="#" onClick={() => nav5("/about")}>About us</a>
        <a href="#" onClick={() => nav6("/contact")}>Contact us</a>
        
        
      </div>
      <div>
      <Link to="/login"><button type="button">Login</button></Link>
      </div>
    </div>
  );
}