import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Pages/Home";
import Inbox from "../Pages/Inbox";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
