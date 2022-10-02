import { useContext } from "react";
import { AppContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";

function PrivateRouter() {
  const isAuth = useContext(AppContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Home/>
    </div>
  );
}
export default PrivateRouter;
