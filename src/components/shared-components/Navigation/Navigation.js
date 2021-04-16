import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navigation.css";
export default function Navigation() {
  const [LoggedInUser] = useContext(UserContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="px-5 bg-brand main-nav"
    >
      <Navbar.Brand
        exact
        className="nav-item"
        activeClassName="active-nav-item"
        to="/"
      >
        <h2 className="logo">Wood Mart</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            exact
            className="nav-item"
            activeClassName="active-nav-item"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            className="nav-item"
            activeClassName="active-nav-item"
            to="/review"
          >
            Reviews
          </NavLink>
          <NavLink
            exact
            className="nav-item"
            activeClassName="active-nav-item"
            to="/admin"
          >
            Admin
          </NavLink>
          <NavLink
            exact
            className="nav-item"
            activeClassName="active-nav-item"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            exact
            className="nav-item"
            activeClassName="active-nav-item"
            to="/login"
          >
            {LoggedInUser.displayName ? LoggedInUser.displayName : "Login"}
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
