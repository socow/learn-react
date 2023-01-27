import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./Todo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
    </Routes>
  );
}

export default App;
