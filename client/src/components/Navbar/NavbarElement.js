import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import CustomLink from "./CustomLink";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vm - 1000px) / 2;
  z-index: 10;
`;

export const NavLink = styled(CustomLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-left: ${(props) => props.ml};
  &.active {
    color: #15cdfc;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  z-index: 200;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
    flex-direction: ${(props) => (props.menuOpen ? "column" : "row")};
    position: ${(props) => (props.menuOpen ? "absolute" : "unset")};
    ${(props) =>
      props.menuOpen
        ? "width: max-content;right: 0; height: 50%;background-color: black;top: 50px;"
        : ""}
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
