import React from "react";
import LocationPage from "./components/Pages/LocationPage";
import FarmerLoginPage from "./components/Pages/FarmerLoginPage";
import Navbar from "./components/Navbar/Navindex";
import { Route, Routes } from "react-router-dom";
import FarmStandDetailPage from "./components/Pages/FarmStandDetailPage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/home" element={"Farm"} />
        <Route path="/about" element={"About the FarmStand"} />
        <Route path="/contact-us" element={"Information"} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/sign-up" element={"Sign Up Form"} />
        <Route path="/sign-in" element={<FarmerLoginPage />} />
        <Route path="/cart" element={"Details"} />
        <Route path="/locationId/:id" element={<FarmStandDetailPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
