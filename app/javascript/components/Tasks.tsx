import React from "react";
import { Link } from "react-router-dom";
import { TaskConnection } from "../generated/graphql";
import { alert4limitOn } from "./TaskList";
import { FetchMoreOptions } from "@apollo/client";

interface Props {
  data: TaskConnection;
  loading: boolean;
  fetchMore: (variables: FetchMoreOptions) => void;
}

const Tasks: React.FC<Props> = (props: Props) => {
  return (
    <>
      {props.loading ? (
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
            {props.data.edges?.map((task) => (
              <div
                className={`table-row text-center ${alert4limitOn(
                  task.node.limitOn
                )}`}
                key={task?.node?.id}
              >
                <div className="table-cell">
                  <Link to={`/tasks/${task?.node.id}`}>
                    {task?.node?.title}
                  </Link>
                </div>
                <div className="table-cell">{task?.node?.limitOn}</div>
                <div className="table-cell">{task?.node?.status?.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-5 text-center">
        <button
          className="m-2 p-2 font-bold border rounded disabled:bg-slate-50 disabled:text-slate-500"
          disabled={!(props.data?.pageInfo?.hasPreviousPage ?? false)}
          onClick={() => {
            void props?.fetchMore({
              variables: {
                first: null,
                last: 10,
                before: props.data?.pageInfo?.startCursor,
              },
            });
          }}
        >
          ←前の10件
        </button>
        <button
          className="m-2 p-2 font-bold border rounded disabled:bg-slate-50 disabled:text-slate-500"
          disabled={!(props.data?.pageInfo?.hasNextPage ?? false)}
          onClick={() => {
            void props?.fetchMore({
              variables: {
                first: 10,
                after: props.data?.pageInfo?.endCursor,
              },
            });
          }}
        >
          次の10件→
        </button>
      </div>
    </>
  );
};

export default Tasks;
