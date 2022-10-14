import React from "react";
import { useFetchTasksQuery } from "../generated/graphql";

const Tasks: React.FC = () => {
  const { loading, data } = useFetchTasksQuery();

  return (
    <>
      <h1>タスク一覧</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {data?.tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Tasks;
