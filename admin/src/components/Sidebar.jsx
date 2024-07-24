import React from "react";
import Button from "./Button";
import { Routes, Route } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-80 bg-slate-600 h-screen py-8 ">
      <div className="flex items-center justify-center gap-5">
        <Routes>
          <Route path="/addproduct" element={<Button name="Add Product" />} />
          <Route
            path="/listproducts"
            element={<Button name="List Products" />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;
