import React from "react";

import { useFetchUsersQuery } from "../generated/graphql";

const UserList: React.FC = () => {
  const { loading, data } = useFetchUsersQuery({
    fetchPolicy: "cache-and-network",
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center m-4">利用者一覧</h1>
      <hr className="my-2" />

      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="table">
          <div className="table-header-group">
            <div className="table-row text-center">
              <div className="table-cell px-35">ユーザー名</div>
              <div className="table-cell px-35">メールアドレス</div>
            </div>
          </div>
          <div className="table-row-group">
            {data?.users.map((user) => (
              <div className="table-row text-center" key={user.id}>
                <div className="table-cell">{user.name}</div>
                <div className="table-cell">{user.email}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
