import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (user.uname.length === 0 || user.pswd.length === 0) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
