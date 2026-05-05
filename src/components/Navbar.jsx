import React, { useState } from "react";
import { Link } from "react-router-dom";



export default function Navbar({ logout }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <h2 className="logo">FoodieHub</h2>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={logout} className="login-btn">Logout</button>
      </div>

      <div className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div></div><div></div><div></div>
      </div>
    </nav>
  );
}