import { useState } from "react";


export const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const login = () => {
    localStorage.setItem("user", "true");
    setUser("true");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, logout };
};