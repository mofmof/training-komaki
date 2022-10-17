import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<TaskList />} errorElement={<ErrorPage />} />
      <Route path="tasks/:id" element={<Task />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
