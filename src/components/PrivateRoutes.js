import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes({ isLogged }) {
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
