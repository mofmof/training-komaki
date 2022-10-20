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
        <div className="table">
          <div className="table-header-group">
            <div className="table-row text-center">
              <div className="table-cell  px-20">タイトル</div>
              <div className="table-cell px-10">期限</div>
            </div>
          </div>
          <div className="table-row-group">
            {data?.tasks.map((task) => (
              <div className="table-row text-center" key={task.id}>
                <div className="table-cell">
                  <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                </div>
                <div className="table-cell">{task.limitOn}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
