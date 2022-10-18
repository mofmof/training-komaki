import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTask from "./components/NewTask";
import ErrorPage from "./components/ErrorPage";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/:id" element={<Task />} />
        <Route path="/tasks/new" element={<NewTask />} />
        <Route path="/tasks/edit" element={<EditTask />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
