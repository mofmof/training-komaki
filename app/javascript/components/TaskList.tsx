import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useExportTaskMutation,
  useFetchTasksQuery,
  useImportTaskMutation,
} from "../generated/graphql";

const TaskList: React.FC = () => {
  const { loading, data, fetchMore } = useFetchTasksQuery({
    variables: {
      first: 10,
    },
    fetchPolicy: "cache-and-network",
  });

  /**
   * Dateオブジェクトの時刻丸め関数
   * @param date
   * @returns
   */
  const truncateDate = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  /**
   * 期日に対するアラート文字列を返す
   * @param limit
   * @returns
   */
  const alert4limitOn = (limit: string): string => {
    // アラート用定数
    const AlertDays = {
      FIRST: 3,
      SECOND: 1,
    } as const;

    const AlertColors = {
      FIRST: "bg-yellow-300",
      SECOND: "bg-orange-300",
      OVER: "bg-red-300",
    } as const;

    const today: number = truncateDate(new Date()).getTime();
    const limitOn: Date = truncateDate(new Date(limit));

    const alertColor = (): string => {
      if (today > limitOn.getTime()) {
        return AlertColors.OVER;
      } else if (
        today >= limitOn.setDate(new Date(limit).getDate() - AlertDays.SECOND)
      ) {
        return AlertColors.SECOND;
      } else if (
        today >= limitOn.setDate(new Date(limit).getDate() - AlertDays.FIRST)
      ) {
        return AlertColors.FIRST;
      }
      return "";
    };

    return alertColor();
  };

  const flashMessage = (message: string): void => {
    setMessage(message);
    // flash message
    const target = document.getElementById("info");
    target.style.visibility = "visible";
    setTimeout(() => {
      target.style = null;
    }, 3000);
  };

  // CSVインポート
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const [importTaskMutation] = useImportTaskMutation({
    variables: {
      file,
    },
    refetchQueries: ["FetchTasks"],
    onCompleted: (result) => {
      flashMessage(result?.importTask?.message);
    },
  });

  // CSVエクスポート
  const [exportTaskMutation] = useExportTaskMutation({
    onCompleted: (result) => {
      flashMessage(result?.exportTask?.message);
    },
  });

  // 期限で絞り込み
  const [fromLimitOn, setFromLimitOn] = useState("");
  const [toLimitOn, setToLimitOn] = useState("");
  // タイトルで検索
  const [title, setTitle] = useState("");

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">タスク一覧</h1>
      <hr className="my-2" />
      <div
        className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3 my-2 rounded invisible"
        role="alert"
        id="info"
      >
        <p className="text-sm">{message}</p>
      </div>
      <div className="mb-5">
        <Link
          className="no-underline mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          to="/tasks/new"
        >
          追加
        </Link>
        <button
          className="text-sm mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => {
            void exportTaskMutation();
          }}
        >
          エクスポート
        </button>
        <div className="inline-block">
          <form>
            <button
              className="text-sm mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                void importTaskMutation({
                  variables: { file },
                });
              }}
            >
              インポート
            </button>
            <input
              id="import"
              type="file"
              accept=".csv"
              required
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </form>
        </div>
      </div>

      <div className="mb-5 mx-auto">
        <form>
          <div className="inline-block">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="fromLimitOn"
            >
              From
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
              name="fromLimitOn"
              type="date"
              max={toLimitOn}
              required
              onChange={(e) => {
                setFromLimitOn(e.target.value);
              }}
            />
          </div>
          〜
          <div className="inline-block">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="toLimitOn"
            >
              To
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
              name="toLimitOn"
              type="date"
              min={fromLimitOn}
              required
              onChange={(e) => {
                setToLimitOn(e.target.value);
              }}
            />
          </div>
          <button
            className="m-2 p-2 font-bold border rounded bg-gray-200 hover:bg-gray-300"
            onClick={(e) => {
              e.preventDefault();
              if (!fromLimitOn || !toLimitOn) {
                confirm("From〜Toのどちらにも入力してください。");
                return;
              } else if (fromLimitOn > toLimitOn) {
                confirm("入力した期間が不正です");
                return;
              }
              void fetchMore({
                variables: {
                  from: fromLimitOn,
                  to: toLimitOn,
                  title,
                },
              });
            }}
          >
            絞り込み
          </button>
        </form>
      </div>
      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="title"
        >
          タイトルで検索
        </label>
        <input
          className="appearance-none block w-full bg-white text-gray-700 border shadow rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
          name="title"
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            void fetchMore({
              variables: {
                from: fromLimitOn,
                to: toLimitOn,
                title: e.target.value,
              },
            });
          }}
        />
      </div>
      {loading ? (
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
            {data?.tasks?.edges?.map((task) => (
              <div
                className={`table-row text-center ${alert4limitOn(
                  task.node.limitOn
                )}`}
                key={task.node.id}
              >
                <div className="table-cell">
                  <Link to={`/tasks/${task.node.id}`}>{task.node.title}</Link>
                </div>
                <div className="table-cell">{task.node.limitOn}</div>
                <div className="table-cell">{task.node.status.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-5 text-center">
        <button
          className="m-2 p-2 font-bold border rounded disabled:bg-slate-50 disabled:text-slate-500"
          disabled={!(data?.tasks.pageInfo.hasPreviousPage ?? false)}
          onClick={() => {
            void fetchMore({
              variables: {
                first: null,
                last: 10,
                before: data?.tasks.pageInfo.startCursor,
                from: fromLimitOn,
                to: toLimitOn,
                title,
              },
            });
          }}
        >
          ←前の10件
        </button>
        <button
          className="m-2 p-2 font-bold border rounded disabled:bg-slate-50 disabled:text-slate-500"
          disabled={!(data?.tasks.pageInfo.hasNextPage ?? false)}
          onClick={() => {
            void fetchMore({
              variables: {
                first: 10,
                after: data?.tasks.pageInfo.endCursor,
                from: fromLimitOn,
                to: toLimitOn,
                title,
              },
            });
          }}
        >
          次の10件→
        </button>
      </div>
    </div>
  );
};

export default TaskList;
