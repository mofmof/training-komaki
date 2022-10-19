import React from "react";
import { useParams } from "react-router-dom";
import { useFetchTaskByIdQuery } from "../generated/graphql";

const Task: React.FC = () => {
  const params = useParams();
  const { data } = useFetchTaskByIdQuery({
    variables: {
      id: params.id,
    },
  });

  return (
    <>
      <h1>タスク詳細</h1>
      <div>タイトル： {data?.task.title}</div>
      <div>詳細： {data?.task.detail}</div>
      <div>期限： {data?.task.limitOn}</div>
    </>
  );
};

export default Task;
