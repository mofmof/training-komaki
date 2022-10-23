import React from "react";
import { useFetchStatusesQuery } from "../generated/graphql";

const SelectStatus: React.FC = (props) => {
  const { data } = useFetchStatusesQuery();
  console.log(props.statusId);

  return (
    <div className="mb-8">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="statusId"
      >
        ステータス
      </label>
      <select
        className="shadow border rounded py-2 px-3"
        name="statusId"
        value={props.statusId}
        onChange={(e) => {
          props.changeStatus(e.target.value);
        }}
      >
        {data?.statuses.map((status) => (
          <option key={status.id} value={status.id}>
            {status.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectStatus;
