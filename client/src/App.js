import React from "react";
import FarmerLogin from "./components/FarmerLogin";
import FarmStandData from "./components/FarmStandData";

import Navbar from "./components/Navbar/Navindex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApiData from "./components/FarmStandData";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={"Farm"}></Route>
          <Route path="/about" element={"About the FarmStand"}></Route>
          <Route path="/contact-us" element={"Information"}></Route>
          <Route path="/location" element={<FarmStandData />}></Route>
          <Route path="/sign-up" element={"Sign Up Form"}></Route>
          <Route path="/sign-in" element={<FarmerLogin />}></Route>
          <Route path="/cart" element={"Details"}></Route>
        </Routes>
      </Router>
    </>
  );
}
// const App = () => {
//   return (
//     <div>
//       <FarmStandData />
//       <FarmerLogin />
//     </div>
//   );
// };

export default App;
