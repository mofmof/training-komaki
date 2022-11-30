import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import {
  useCreateTaskMutation,
  useFetchStatusesQuery,
} from "../generated/graphql";
import { useForm, SubmitHandler } from "react-hook-form";

const AddTask: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data } = useFetchStatusesQuery();
  const [createTask] = useCreateTaskMutation({
    onCompleted: (data) => {
      navigate(`/tasks/${data?.createTask?.task?.id}`);
    },
  });
  const userId = currentUser?.id;

  // バリデーション
  interface FormValues {
    title: string;
    detail: string;
    limitOn: string;
    statusId: string;
    userId: number;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { statusId: "1" } });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    void createTask({
      variables: {
        params: {
          title: data.title,
          detail: data.detail,
          limitOn: data.limitOn,
          statusId: data.statusId,
          userId,
        },
      },
    });
    reset();
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">タスク追加</h1>
      <hr className="my-2" />
      <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="title"
        >
          タイトル
        </label>
        <input
          className="appearance-none block w-full bg-white text-gray-700 border shadow rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="タイトル"
          {...register("title", {
            required: "タイトルを入力してください",
          })}
        />
        <p className="text-red-500">{errors.title?.message}</p>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          詳細
        </label>
        <textarea
          className="mt-1 block w-full border shadow rounded"
          rows={6}
          {...register("detail")}
        ></textarea>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="limitOn"
        >
          期限
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
          type="date"
          {...register("limitOn", {
            required: "期限を設定してください",
          })}
        />
        <p className="text-red-500">{errors.limitOn?.message}</p>
        <div className="mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="statusId"
          >
            ステータス
          </label>
          <select
            className="shadow border rounded py-2 px-3"
            {...register("statusId")}
          >
            {data?.statuses.map((status) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        <input
          className="no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          value="追加"
        />
      </form>
      <div className="text-center">
        <Link className="no-underline" to="/">
          - TOP -
        </Link>
      </div>
    </div>
  );
};

export default AddTask;
