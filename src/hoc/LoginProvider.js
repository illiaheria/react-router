import { createContext, useState } from "react";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setIsLogin = (value) => {
    setIsLoggedIn(value);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
