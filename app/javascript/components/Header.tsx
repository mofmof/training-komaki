import Cookies from "js-cookie";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { signOut } from "../api/auth";
import { AuthContext } from "../App";
import { useFetchTeamsQuery } from "../generated/graphql";
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

  const params = useParams();
  const { data } = useFetchTeamsQuery();

  return (
    <div className="flex mx-4">
      <div className="flex-1 m-auto">
        <select
          className="shadow border rounded py-2 px-3"
          name="teamId"
          value={params.id}
          onChange={(e) => {
            const teamId = e.target.value;
            if (teamId === "0") {
              navigate("/");
            } else {
              navigate(`/teams/${teamId}`);
            }
          }}
        >
          <option value="0">チーム未選択</option>
          {data?.teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-2">
        <div className="py-2 px-2 inline-block font-bold">
          {currentUser?.name}
        </div>
        <NotificationToggle />
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
