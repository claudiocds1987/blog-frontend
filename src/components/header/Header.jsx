import React from "react";
import { Navbar, Container } from "react-bootstrap";
// npm install react-router-dom
import { Link } from "react-router-dom";
// css
import "./Header.css";

const Header = () => {
  return (
    <Navbar id="navBar" expand="lg" fixed="top">
      <div>
        <img src="https://logobly.com/wp-content/uploads/001-rocket-1.png" />
        <Link to="/home" style={{ color: "#FFF" }} className="navbar-brand">
          home
        </Link>
        <Link to="/create" style={{ color: "#FFF" }} className="navbar-brand">
          Crear blog
        </Link>     
      </div>
    </Navbar>
  );
};

export default Header;
