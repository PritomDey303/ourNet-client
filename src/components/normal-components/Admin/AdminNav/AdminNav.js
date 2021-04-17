import AOS from "aos";
import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminNav.css";
AOS.init();
export default function AdminNav() {
  return (
    <>
      <div className="sideNav bg-brand">
        <ul data-aos="fade-right">
          <li>
            <NavLink
              exact
              to="/admin/orderinfo"
              className="sideLink"
              activeClassName="sideLinkActive"
            >
              Orders Info
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/admin/addproducts"
              className="sideLink"
              activeClassName="sideLinkActive"
            >
              Add Products
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/admin/productinfo"
              className="sideLink"
              activeClassName="sideLinkActive"
            >
              Product Info
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/admin/addfeatures"
              className="sideLink"
              activeClassName="sideLinkActive"
            >
              Add Features
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/admin/ManageFeatures"
              className="sideLink"
              activeClassName="sideLinkActive"
            >
              Manage Features
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/admin/managereviews"
              className="sideLink"
              activeClassName="sideLinkActive"
            >
              Manage Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
