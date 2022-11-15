import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { useUpdateNotificationFlgMutation } from "../generated/graphql";

const notificationToggle: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  const [toggle, setToggle] = useState(
    currentUser?.notificationFlg === "enabled"
  );

  const toggleClass = "transform translate-x-5";

  // 通知フラグ更新
  const [updateNotificationFlgMutation] = useUpdateNotificationFlgMutation({
    onCompleted: (data) => {
      console.log(data.updateNotificationFlg?.result);
    },
  });

  return (
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
        <div
          className={`bg-white h-5 w-5 rounded-full transform duration-300 ease-in-out ${
            toggle ? "" : toggleClass
          }`}
        ></div>
      </div>
    </div>
  );
};

export default notificationToggle;
