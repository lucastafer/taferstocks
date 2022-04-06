import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import MyExpenses from "./Components/MyExpenses/MyExpenses";

const RoutesFunction = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/myexpenses" element={<MyExpenses/>}/>
    </Routes>
  </BrowserRouter>
);

export default RoutesFunction;
