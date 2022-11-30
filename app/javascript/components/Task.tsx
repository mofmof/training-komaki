import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteTaskMutation,
  useFetchTaskByIdQuery,
} from "../generated/graphql";

const Task: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data } = useFetchTaskByIdQuery({
    variables: {
      id: params.id,
    },
    fetchPolicy: "cache-and-network",
  });

  const [deleteTaskMutation] = useDeleteTaskMutation({
    variables: {
      id: params.id,
    },
    onCompleted: () => {
      navigate("/");
    },
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">タスク詳細</h1>
      <hr className="my-2" />
      <div className="mb-5">
        <Link
          className="no-underline mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          to={`/tasks/${params.id}/edit`}
        >
          編集
        </Link>
        <button
          className="mr-2 text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          data-modal-toggle="popup-modal"
          onClick={() => {
            const result = confirm("このタスクを削除してもよろしいですか？");
            if (result) {
              void deleteTaskMutation({
                variables: { id: params?.id },
              });
            }
          }}
        >
          削除
        </button>
      </div>
      <div>タイトル： {data?.task.title}</div>
      <div>詳細： {data?.task.detail}</div>
      <div>期限： {data?.task.limitOn}</div>
      <div>ステータス： {data?.task.status.name}</div>
      <div>担当者：{data?.task.owner?.name}</div>
      <div className="text-center">
        <Link className="no-underline" to="/">
          - TOP -
        </Link>
      </div>
    </div>
  );
};

export default Task;
