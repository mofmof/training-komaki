import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../App";
import Header from "./Header";
import UserList from "./UserList";

export const Role = {
  ADMIN: "admin",
  GENERAL: "general",
} as const;

const RequireAuth: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);

  if (!isSignedIn) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <Header />
      {currentUser?.role === Role.ADMIN ? <UserList /> : <Outlet />}
    </>
  );
};

export default RequireAuth;
