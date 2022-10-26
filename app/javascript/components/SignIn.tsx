import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";
import { AuthContext } from "../App";

const SignIn: React.FC = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const params = {
      email,
      password,
    };

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers.client);
        Cookies.set("_uid", res.headers.uid);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        navigate("/");
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) {
        confirm("認証に失敗しました。");
      }
    }
  };

  return (
    <div className="container mx-auto w-76">
      <h1 className="text-4xl font-bold text-center m-4">サインイン</h1>
      <form>
        <div className="mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            メールアドレス
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border shadow rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            パスワード
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border shadow rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center mb-4">
          <button
            className="no-underline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={async (e) => await handleSignInSubmit(e)}
          >
            送信
          </button>
        </div>
      </form>
      <div className="text-center">
        <Link className="no-underline" to="/signup">
          サインアップ
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
