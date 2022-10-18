import React from "react";
import { Link } from "react-router-dom";
import { useFetchTasksQuery } from "../generated/graphql";

const TaskList: React.FC = () => {
  const { loading, data } = useFetchTasksQuery();

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">タスク一覧</h1>
      <hr className="my-2" />
      <div className="mb-5">
        <Link
          className="no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          to="/tasks/new"
        >
          追加
        </Link>
      </div>

      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="list-disc">
          {data?.tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
