import React, { useState } from "react";
import LocationPage from "./components/Pages/LocationPage";
import FarmerLoginPage from "./components/Pages/FarmerLoginPage";
import Navbar from "./components/Navbar/Navindex";
import { Route, Routes } from "react-router-dom";
import FarmStandDetailPage from "./components/Pages/FarmStandDetailPage";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);
  const showCartHandler = () => {
    setCart(true);
  };
  const hideCartHandler = () => {
    setCart(false);
  };

  return (
    <React.Fragment>
      <CartProvider>
        {cart && <Cart onClose={hideCartHandler} />}
        <Navbar onShowCart={showCartHandler} />
      </CartProvider>
      <Routes>
        <Route path="/" element={"Farm"} />
        <Route path="/about" element={"About the FarmStand"} />
        <Route path="/contact-us" element={"Information"} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/sign-up" element={"Sign Up Form"} />
        <Route path="/sign-in" element={<FarmerLoginPage />} />
        <Route path="/locationId/:id" element={<FarmStandDetailPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
