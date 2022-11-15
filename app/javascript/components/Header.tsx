import Cookies from "js-cookie";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../api/auth";
import { AuthContext } from "../App";
import NotificationToggle from "./NotificationToggle";

const Header: React.FC = () => {
  const { setIsSignedIn, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async (): Promise<void> => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        navigate("/signin");

        console.log("Succeeded in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-right mx-4">
      <div className="py-2 px-2 inline-block font-bold">
        {currentUser?.name}
      </div>
      <NotificationToggle />
      <div className="inline-block">
        <button
          className="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
          onClick={async (e) => await handleSignOut(e)}
        >
          サインアウト
        </button>
      </div>
    </div>
  );
};

export default Header;
