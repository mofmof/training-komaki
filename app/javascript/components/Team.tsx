import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchTeamByIdQuery } from "../generated/graphql";

const Team: React.FC = () => {
  const params = useParams();
  const { data } = useFetchTeamByIdQuery({
    variables: {
      id: params.id,
    },
    fetchPolicy: "cache-and-network",
  });
  const [email, setEmail] = useState("");

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">{data?.team.name}</h1>
      <hr className="my-2" />
      <form>
        <div className="mb-4">
          <div className="inline-block w-80 mr-2">
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
            >
              送信
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
