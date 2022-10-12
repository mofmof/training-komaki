import React from "react";
import { useFetchTasksQuery } from "./generated/graphql";

const App: React.FC = () => {
  const { loading, data } = useFetchTasksQuery();

  console.log(data);
  // if (error) return `エラー：${error.message}`;

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

export default App;
