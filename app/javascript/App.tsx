import React from "react";
import { Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Tasks />} />
    </Routes>
  );
};

export default App;
