import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElement";
import Searchbox from "./Searchbox";
import HeaderCartButton from "./HeaderCartButton";
import { useState } from "react";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  function openHamburger() {
    setMenuOpen((curr) => !curr);
  }
  function onShowCart() {
    props.onShowCart();
    openHamburger();
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
          <NavBtn></NavBtn>
          <NavLink ml={"auto"} to="/about" onClick={openHamburger}>
            About
          </NavLink>
          <Searchbox />
          <NavLink ml={"auto"} to="/location" onClick={openHamburger}>
            Location
          </NavLink>

          <NavLink to="/sign-in" onClick={openHamburger}>
            Sign In{" "}
          </NavLink>
          <HeaderCartButton onClick={onShowCart} />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
