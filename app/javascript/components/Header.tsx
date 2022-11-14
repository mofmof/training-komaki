import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../api/auth";
import { AuthContext } from "../App";
import { useUpdateNotificationFlgMutation } from "../generated/graphql";

const Header: React.FC = () => {
  const { setIsSignedIn, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(
    currentUser?.notificationFlg === "enabled"
  );
  const toggleClass = "transform translate-x-5";

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

  // 通知フラグ更新
  const [updateNotificationFlgMutation] = useUpdateNotificationFlgMutation({
    onCompleted: (data) => {
      console.log(data.updateNotificationFlg?.result);
    },
  });

  return (
    <div className="text-right mx-4">
      <div className="py-2 px-2 inline-block font-bold">
        {currentUser?.name}
      </div>
      <div className="py-2 px-2 inline-block text-center">
        <span className="text-xs">メール通知</span>
        <div
          className={`mx-auto w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
            toggle ? "bg-blue-500" : "bg-gray-400"
          }`}
          onClick={() => {
            setToggle(!toggle);
            void updateNotificationFlgMutation({
              variables: {
                notificationFlg: !toggle ? "enabled" : "disabled",
              },
            });
          }}
        >
          {/* Switch */}
          <div
            className={`bg-white h-5 w-5 rounded-full transform duration-300 ease-in-out ${
              toggle ? "" : toggleClass
            }`}
          ></div>
        </div>
      </div>
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
