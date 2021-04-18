import AOS from "aos";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../../App";
import "./AdminNav.css";
AOS.init();
export default function AdminNav() {
  const [admin, setAdmin] = useState([]);
  const [LoggedInUser, , , , , , , , URL] = useContext(UserContext);

  useEffect(() => {
    fetch(`${URL}/admin?email=${LoggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
        console.log(data);
      });
  }, [URL, LoggedInUser.email]);
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
              User Orders Info
            </NavLink>
          </li>
          {admin.length !== 0 && (
            <>
              <li>
                <NavLink
                  exact
                  to="/admin/addservice"
                  className="sideLink"
                  activeClassName="sideLinkActive"
                >
                  Add Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  to="/admin/manageservice"
                  className="sideLink"
                  activeClassName="sideLinkActive"
                >
                  Manage Services
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
              <li>
                <NavLink
                  exact
                  to="/admin/allorders"
                  className="sideLink"
                  activeClassName="sideLinkActive"
                >
                  All Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/admin/addadmin"
                  className="sideLink"
                  activeClassName="sideLinkActive"
                >
                  Add Admin
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
