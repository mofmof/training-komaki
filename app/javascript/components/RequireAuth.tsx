import React, { useContext } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import Header from "./Header";

export const Role = {
  ADMIN: "admin",
  GENERAL: "general",
} as const;

const RequireAuth: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);

  if (!isSignedIn) {
    return <Navigate to="/signin" />;
  }
  const navigate = useNavigate();
  const location = useLocation();

  if (currentUser?.role === Role.ADMIN) {
    navigate("/users");
  } else if (location.pathname === "/users") {
    navigate("/");
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RequireAuth;
