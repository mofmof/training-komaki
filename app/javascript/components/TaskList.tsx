import React from "react";
import { Link } from "react-router-dom";
import { useFetchTasksQuery } from "../generated/graphql";

const TaskList: React.FC = () => {
  const { loading, data } = useFetchTasksQuery();

  return (
    <>
      <h1>タスク一覧</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {data?.tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
