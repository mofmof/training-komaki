import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchTaskByIdQuery } from "../generated/graphql";

const Task: React.FC = () => {
  const params = useParams();
  const { data } = useFetchTaskByIdQuery({
    variables: {
      id: params.id,
    },
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">タスク詳細</h1>
      <hr className="my-2" />
      <div className="mb-5">
        <Link
          className="no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          to={`/tasks/${params.id}/edit`}
        >
          編集
        </Link>
      </div>
      <div>タイトル： {data?.task.title}</div>
      <div>詳細： {data?.task.detail}</div>
      <div>期限： {data?.task.limitOn}</div>
    </div>
  );
};

export default Task;
