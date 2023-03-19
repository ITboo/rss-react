import Navbar from "../navbar/Navbar";
import React from "react";
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <a href="/" className="header__logo">
            <span>LOGO</span>
          </a>
          <section className="header__nav">{<Navbar />}</section>
        </header>
      </div>
    );
  }
}
export default Header;
