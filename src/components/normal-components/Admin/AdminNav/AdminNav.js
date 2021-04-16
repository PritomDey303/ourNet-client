import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminNav.css";
export default function AdminNav() {
  return (
    <div>
      <div className="sideNav bg-brand">
        <ul></ul>
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
            to="/admin/updatecontact"
            className="sideLink"
            activeClassName="sideLinkActive"
          >
            Update Contact Info
          </NavLink>
        </li>
      </div>
    </div>
  );
}
