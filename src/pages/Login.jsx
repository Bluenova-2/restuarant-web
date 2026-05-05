import React from "react";
import { useNavigate } from "react-router-dom";



 export default
 function Login({ login }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/"); // FIX: redirect to home immediately
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p>Login to continue</p>
          <input placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}