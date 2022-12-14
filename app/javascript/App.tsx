import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTask from "./components/NewTask";
import ErrorPage from "./components/ErrorPage";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { getCurrentUser } from "./api/auth";
import RequireAuth from "./components/RequireAuth";
import UserList from "./components/UserList";
import NewTeam from "./components/NewTeam";
import Team from "./components/Team";
import InviteTeam from "./components/InviteTeam";

interface User {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  nickname?: string;
  image?: string;
  allowPasswordChange: boolean;
  created_at: Date;
  updated_at: Date;
  role: string;
  notificationFlg: string;
}

interface AuthContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

interface TeamContextType {
  teamId: string;
  setTeamId: (teamId: string) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const TeamContext = createContext<TeamContextType>(null!);

export const useSelectTeam = (): TeamContextType => {
  const [teamId, setTeamId] = useState("");
  return {
    teamId,
    setTeamId,
  };
};

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
      } else {
        console.log("No current user");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    void handleGetCurrentUser();
  }, []);

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
        }}
      >
        <TeamContext.Provider value={useSelectTeam()}>
          {!loading && (
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route element={<RequireAuth />}>
                <Route path="/" element={<TaskList />} />
                <Route path="/tasks/:id" element={<Task />} />
                <Route path="/tasks/new" element={<NewTask />} />
                <Route path="/tasks/:id/edit" element={<EditTask />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/teams/new" element={<NewTeam />} />
                <Route path="/teams/:teamId" element={<Team />} />
              </Route>
              <Route path="/teams/:teamId/:token" element={<InviteTeam />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          )}
        </TeamContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
