import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../hoc/LoginProvider";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, setIsLogin } = useContext(LoginContext);

  const handleLogin = () => {
    setIsLogin(true);
    if (location.state?.from?.pathname) {
      navigate(location?.state?.from?.pathname, { replace: true });
    } else navigate("/");
  };

  return (
    <>
      Login Page <button onClick={handleLogin}> Log in</button>
    </>
  );
};
