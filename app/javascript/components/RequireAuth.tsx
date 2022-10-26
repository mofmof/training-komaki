import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../App";
import Header from "./Header";

const RequireAuth: React.FC = () => {
  const contextValue = useContext(AuthContext);

  if (!contextValue.isSignedIn) {
    return <Navigate to="/signin" />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RequireAuth;
