import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageTypes from "./components/ManageTypes";
import ObjectType from "./components/ObjectType/ObjectType";
import { useSelector } from "react-redux";
import { selectObjectsTypes } from "./features/counter/counterSlice";

export default function App() {
  let types = useSelector(selectObjectsTypes);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ObjectType key={"all"} />} />
        <Route path="all" element={<ObjectType key={"all"} />} />
        {types.map((typeData) => {
          return (
            <Route
              path={typeData.type}
              element={<ObjectType key={typeData.type} type={typeData.type} />}
            />
          );
        })}
        <Route path="manageTypes" element={<ManageTypes />} />
      </Routes>
    </BrowserRouter>
  );
}
