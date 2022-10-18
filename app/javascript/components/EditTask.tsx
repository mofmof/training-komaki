import React, { useState } from "react";

const EditTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [limitOn, setLimitOn] = useState("");

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">タスク編集</h1>
      <hr className="my-2" />
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="title"
          >
            タイトル
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border shadow rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
            name="title"
            type="text"
            placeholder="タイトル"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            詳細
          </label>
          <textarea
            className="mt-1 block w-full border shadow rounded"
            rows={6}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="limitOn"
          >
            期限
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
            name="limitOn"
            type="date"
            required
            onChange={(e) => {
              setLimitOn(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            更新
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
