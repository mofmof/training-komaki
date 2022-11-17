import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCreateTeamMutation } from "../generated/graphql";

const NewTeam: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [createTeamMutation] = useCreateTeamMutation({
    variables: {
      name,
    },
    onCompleted: (data) => {
      navigate(`/teams/${data.createTeam?.team.id}`);
    },
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">チーム作成</h1>
      <hr className="my-2" />
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            チーム名
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border shadow rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
            name="name"
            type="text"
            placeholder="チーム名"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              void createTeamMutation({
                variables: {
                  name,
                },
              });
              setName("");
            }}
          >
            追加
          </button>
        </div>
      </div>
      <div className="text-center">
        <Link className="no-underline" to="/">
          - TOP -
        </Link>
      </div>
    </div>
  );
};

export default NewTeam;
