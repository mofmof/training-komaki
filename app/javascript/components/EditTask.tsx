import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext, TeamContext } from "../App";
import {
  useFetchTaskByIdQuery,
  useUpdateTaskMutation,
  useFetchTeamUsersQuery,
} from "../generated/graphql";
import SelectStatus from "./SelectStatus";

const EditTask: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();

  const { data } = useFetchTaskByIdQuery({
    variables: {
      id: params.id,
    },
  });

  const [title, setTitle] = useState(data?.task.title);
  const [detail, setDetail] = useState(data?.task.detail);
  const [limitOn, setLimitOn] = useState(data?.task.limitOn);
  const [statusId, setStatusId] = useState(data?.task.statusId);
  const userId = currentUser?.id;

  const changeStatus = (state: string): void => {
    setStatusId(state);
  };

  const [updateTask] = useUpdateTaskMutation({
    onCompleted: (data) => {
      navigate(`/tasks/${data?.updateTask?.task?.id}`);
    },
  });

  const [ownerId, setOwnerId] = useState(data?.task.ownerId);
  const team = useContext(TeamContext);
  const { data: teamUsers } = useFetchTeamUsersQuery({
    variables: {
      teamId: team.teamId,
    },
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">タスク編集</h1>
      <hr className="my-2" />
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="title"
          >
            タイトル
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border shadow rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
            name="title"
            type="text"
            placeholder="タイトル"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            詳細
          </label>
          <textarea
            className="mt-1 block w-full border shadow rounded"
            rows={6}
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="limitOn"
          >
            期限
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
            name="limitOn"
            type="date"
            value={limitOn}
            required
            onChange={(e) => {
              setLimitOn(e.target.value);
            }}
          />
        </div>
        <SelectStatus statusId={statusId} changeStatus={changeStatus} />
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ownerId"
          >
            担当者
          </label>
          <select
            className="shadow border rounded py-2 px-3"
            name="ownerId"
            value={ownerId}
            onChange={(e) => {
              setOwnerId(e.target.value);
            }}
          >
            <option value="">未選択</option>
            {teamUsers?.teamUsers.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Link
            className="no-underline mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to={`/tasks/${params.id}`}
          >
            戻る
          </Link>
          <button
            className="no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              void updateTask({
                variables: {
                  id: params.id,
                  params: {
                    title,
                    detail,
                    limitOn,
                    statusId,
                    userId,
                    teamId: team.teamId,
                    ownerId,
                  },
                },
              });
              setTitle("");
              setDetail("");
              setLimitOn("");
              setStatusId("");
              setOwnerId("");
            }}
          >
            更新
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
