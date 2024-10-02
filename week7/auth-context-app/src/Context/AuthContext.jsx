import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const storedJwt = localStorage.getItem("jwt");
    if (storedJwt) {
      setIsLoggedIn(true);
      setToken(storedJwt);
    }
    setIsLoading(false);
  }, []);

  function login(token) {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("jwt", token);
  }

  function logout() {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("jwt");
  }

  const authValue = {
    isLoggedIn,
    isLoading,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}