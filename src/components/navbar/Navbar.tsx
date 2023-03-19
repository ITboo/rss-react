import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink
          to="/"
          className="nav__link"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="nav__link"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
            };
          }}
        >
          About us
        </NavLink>
      </div>
    );
  }
}
export default Navbar;
