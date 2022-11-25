import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useFetchTeamByIdQuery,
  useFetchTeamTasksQuery,
  useSendInvitationMailMutation,
} from "../generated/graphql";
import { alert4limitOn } from "./TaskList";

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

  const {
    data: team,
    loading,
    fetchMore,
  } = useFetchTeamTasksQuery({
    variables: {
      first: 10,
      teamId: params.id,
    },
  });

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
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="table">
          <div className="table-header-group">
            <div className="table-row text-center">
              <div className="table-cell px-40">タイトル</div>
              <div className="table-cell px-15">期限</div>
              <div className="table-cell px-15">ステータス</div>
            </div>
          </div>
          <div className="table-row-group">
            {team?.teamTasks?.edges?.map((task) => (
              <div
                className={`table-row text-center ${alert4limitOn(
                  task.node.limitOn
                )}`}
                key={task.node.id}
              >
                <div className="table-cell">
                  <Link to={`/tasks/${task.node.id}`}>{task.node.title}</Link>
                </div>
                <div className="table-cell">{task.node.limitOn}</div>
                <div className="table-cell">{task.node.status.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-5 text-center">
        <button
          className="m-2 p-2 font-bold border rounded disabled:bg-slate-50 disabled:text-slate-500"
          disabled={!(team?.teamTasks.pageInfo.hasPreviousPage ?? false)}
          onClick={() => {
            void fetchMore({
              variables: {
                first: null,
                last: 10,
                before: team?.teamTasks.pageInfo.startCursor,
              },
            });
          }}
        >
          ←前の10件
        </button>
        <button
          className="m-2 p-2 font-bold border rounded disabled:bg-slate-50 disabled:text-slate-500"
          disabled={!(team?.teamTasks.pageInfo.hasNextPage ?? false)}
          onClick={() => {
            void fetchMore({
              variables: {
                first: 10,
                after: team?.teamTasks.pageInfo.endCursor,
              },
            });
          }}
        >
          次の10件→
        </button>
      </div>
      <div className="text-center">
        <Link className="no-underline" to="/">
          - TOP -
        </Link>
      </div>
    </div>
  );
};

export default Team;
