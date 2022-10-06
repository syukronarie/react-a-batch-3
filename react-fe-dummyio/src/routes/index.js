import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostHome from "../pages/post";

const ConfigRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRoute;
