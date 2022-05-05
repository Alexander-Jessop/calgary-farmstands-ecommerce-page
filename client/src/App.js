import React, { useState } from "react";
import LocationPage from "./components/Pages/LocationPage";
import FarmerLoginPage from "./components/Pages/FarmerLoginPage";
import Navbar from "./components/Navbar/Navindex";
import { Route, Routes } from "react-router-dom";
import FarmStandDetailPage from "./components/Pages/FarmStandDetailPage";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
import FarmerInventoryPage from "./components/Pages/FarmerInventoryPage";
import ModalDialog from "./components/Signup/ModalDialog";
import HomePage from "./components/HomePage";
import Billing from "./components/Cart/Billing";
import ProductUpdate from "./components/FarmerInventory/ProductUpdate";
import Footer from "./components/Footer/Footer";

function App() {
  const [cart, setCart] = useState(false);
  const showCartHandler = () => {
    setCart(true);
  };
  const hideCartHandler = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/sign-up" element={<ModalDialog />} />
        <Route path="/sign-in" element={<FarmerLoginPage />} />
        <Route path="/inventory" element={<FarmerInventoryPage />} />
        <Route path="/locationId/:id" element={<FarmStandDetailPage />} />
        <Route path="/inventory-update/:id" element={<ProductUpdate />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
