import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loding from "./Loding";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  if (user && user.email) {
    return children;
  }
  if (loding) {
    return <Loding></Loding>;
  }
  return <Navigate to={`/login`}></Navigate>;
};

export default Private;
