import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Auth } from "../Auth";
import Logo from "../../../assets/Logo.png";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar bg="Light" variant="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="158"
            height="46"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="#features">
            <span style={{ padding: "20px", color: "#193F67" }}>Educatie</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span style={{ padding: "20px", color: "#193F67" }}>
              Consultanta
            </span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span style={{ padding: "20px", color: "#193F67" }}>Blog</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span style={{ padding: "20px", color: "#193F67" }}>
              Despre Noi
            </span>
          </Nav.Link>
        </Nav>
        <Auth />
      </Container>
    </Navbar>
  );
};

export default NavBar;
