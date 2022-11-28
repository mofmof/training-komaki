import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../App";
import { useParticipateTeamMutation } from "../generated/graphql";

const InviteTeam: React.FC = () => {
  const { isSignedIn } = useContext(AuthContext);

  if (!isSignedIn) {
    return (
      <Navigate to="/signin" state={{ from: useLocation() }} replace={false} />
    );
  }

  const params = useParams();
  const [message, setMessage] = useState("");
  const [participateTeamMutation] = useParticipateTeamMutation({
    variables: {
      id: params.teamId,
      token: params.token,
    },
    onCompleted: (data) => {
      setMessage(data?.participateTeam?.message);
      const accept = document.getElementById("accept");
      accept.style.display = "none";
      const info = document.getElementById("info");
      info.style.visibility = "visible";
    },
  });

  return (
    <div className="text-center">
      <div
        className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3 my-2 w-100 mx-auto rounded invisible"
        role="alert"
        id="info"
      >
        <p className="text-sm">{message}</p>
      </div>

      <div id="accept">
        <div className="mt-10">チームからの招待を承認しますか？</div>
        <button
          className="mt-5 no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            e.preventDefault();
            void participateTeamMutation();
          }}
        >
          承認
        </button>
      </div>

      <div className="text-center mt-10">
        <Link className="no-underline" to="/">
          - TOP -
        </Link>
      </div>
    </div>
  );
};

export default InviteTeam;
