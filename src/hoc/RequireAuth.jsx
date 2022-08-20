import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoginContext } from "./LoginProvider";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useContext(LoginContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
