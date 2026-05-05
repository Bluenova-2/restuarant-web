import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Protected from "./auth/Protected";
import { useAuth } from "./auth/useAuth";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

export default function App() {
  const { user, login, logout } = useAuth();

  return (
    <BrowserRouter>
    
      {user && <Navbar logout={logout} />}
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/" element={<Protected user={user}><Home /></Protected>} />
        <Route path="/about" element={<Protected user={user}><About /></Protected>} />
        <Route path="/contact" element={<Protected user={user}><Contact /></Protected>} />
      </Routes>
      
    </BrowserRouter>
  );
}