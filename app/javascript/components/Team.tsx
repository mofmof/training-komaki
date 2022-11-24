import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useFetchTeamByIdQuery,
  useSendInvitationMailMutation,
} from "../generated/graphql";

const Team: React.FC = () => {
  const params = useParams();
  const { data } = useFetchTeamByIdQuery({
    variables: {
      id: params.id,
    },
    fetchPolicy: "cache-and-network",
  });
  const [email, setEmail] = useState("");
  const [teamId, setTeamId] = useState(params.id);

  const [sendInvitationMailMutation] = useSendInvitationMailMutation({
    variables: {
      email,
      teamId,
    },
    onCompleted: (result) => {
      flashMessage(result?.sendInvitationMail?.message);
    },
  });

  // TODO: TaskListからFlashMessageのコンポーネント化
  const [message, setMessage] = useState("");
  const flashMessage = (message: string): void => {
    setMessage(message);
    // flash message
    const target = document.getElementById("info");
    target.style.visibility = "visible";
    setTimeout(() => {
      target.style = null;
    }, 3000);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">{data?.team.name}</h1>
      <hr className="my-2" />
      <div
        className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3 my-2 rounded invisible"
        role="alert"
        id="info"
      >
        <p className="text-sm">{message}</p>
      </div>
      <form>
        <div className="mb-4">
          <div className="inline-block w-100 mr-2">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border shadow rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
              placeholder="招待したいユーザーのメールアドレス"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inline-block">
            <button
              className="no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                void sendInvitationMailMutation({
                  variables: {
                    email,
                    teamId,
                  },
                });
                setEmail("");
              }}
            >
              招待メールを送信
            </button>
          </div>
        </div>
      </form>
      <div className="text-center">
        <Link className="no-underline" to="/">
          - TOP -
        </Link>
      </div>
    </div>
  );
};

export default Team;
