import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useModaretor from "../Hooks/useModaretor";

const ModaretorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isModaretor, isModaretorLoading] = useModaretor();
  const location = useLocation();
  console.log(isAdmin);

  if (loading || isModaretorLoading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && (isAdmin || isModaretor)) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default ModaretorRoute;
