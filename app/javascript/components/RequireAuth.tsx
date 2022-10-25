import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../App";
import SignOut from "./SignOut";

const RequireAuth: React.FC = () => {
  const contextValue = useContext(AuthContext);

  if (!contextValue.isSignedIn) {
    return <Navigate to="/signin" />;
  }
  return (
    <>
      <SignOut />
      <Outlet />
    </>
  );
};

export default RequireAuth;
