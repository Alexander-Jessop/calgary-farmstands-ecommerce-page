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

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="./images/farmer.png" height={40} />
          <h1>FARMSTANDS</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/location">Location</NavLink>
          <Searchbox />
        </NavMenu>
        <NavBtn>
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavBtnLink to="/sign-in">Sign In </NavBtnLink>
          <HeaderCartButton onClick={props.onShowCart} />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
