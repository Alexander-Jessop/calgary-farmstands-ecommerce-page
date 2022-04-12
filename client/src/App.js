import React from "react";
import FarmerLogin from "./components/FarmerLogin";
import FarmStandData from "./components/FarmStandData";

import Navbar from "./components/Navbar/Navindex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={"Hello Team"}></Route>
          <Route path="/about" element={"Farm"}></Route>
          <Route path="/contact-us" element={"Information"}></Route>
          <Route path="/location" element={<ApiData />}></Route>
          <Route path="/sign-up" element={"Sign Up Form"}></Route>
          <Route path="/sign-in" element={"Sign In Form"}></Route>
          <Route path="/cart" element={"Details"}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
