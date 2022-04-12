import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  CartLink,
} from "./NavbarElement";
import Searchbox from "./Searchbox";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <img src="./images/farmer.png" height={40} />
          <h1>FARMSTANDS</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/location">Location</NavLink>
          <Searchbox />
        </NavMenu>
        <NavBtn>
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavBtnLink to="/sign-in">Sign In </NavBtnLink>
          <NavLink to="/cart">
            <CartLink>
              <img src="./images/cart.png" height={40} />
              <p>Cart</p>
            </CartLink>
          </NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
