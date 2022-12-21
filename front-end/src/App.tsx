import React from "react";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
