import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
// npm install react-router-dom
import { Link, useHistory } from "react-router-dom";
// css
import "./Header.css";

const Header = () => {
  return (
    <Navbar id="navBar" expand="lg" fixed="top">
      <Container>
        <img src="https://logobly.com/wp-content/uploads/001-rocket-1.png" />
        <Link to="/home" style={{ color: "#FFF" }} className="navbar-brand">
          home
        </Link>
        <Link to="/create" style={{ color: "#FFF" }} className="navbar-brand">
          Crear blog
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      </Container>
    </Navbar>
  );
};

export default Header;
