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
import HeaderCartButton from "./HeaderCartButton";
import { useState } from "react";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  function openHamburger() {
    setMenuOpen((curr) => !curr);
  }
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="./images/farmer.png" height={40} />
          <h1>FARMSTANDS</h1>
        </NavLink>
        <Bars onClick={openHamburger} />
        <NavMenu menuOpen={menuOpen}>
          <NavLink ml={"auto"} to="/about">
            About
          </NavLink>
          <NavLink to="/location">Location</NavLink>
          <Searchbox />
          <NavLink ml={"auto"} to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink to="/sign-in">Sign In </NavLink>
          <HeaderCartButton onClick={props.onShowCart} />
        </NavMenu>
        <NavBtn></NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
