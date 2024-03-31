import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Components/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
