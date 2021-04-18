import React from "react";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "../../shared-components/Banner/Banner";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import AddAdmin from "./AddAdmin/AddAdmin";
import AddFeatures from "./AddFeatures/AddFeatures";
import AddService from "./AddService/AddService";
import AdminNav from "./AdminNav/AdminNav";
import ManageFeatures from "./ManageFeatures/ManageFeatures";
import ManageReview from "./ManageReview/ManageReview";
import ManageService from "./ManageService/ManageService";
import OrdersInfo from "./OrdersInfo/OrdersInfo";
import WelcomeAdmin from "./WelcomeAdmin/WelcomeAdmin";

export default function Admin() {
  return (
    <div>
      <Navigation />
      <Router>
        <Row>
          <Col md={3}>
            <AdminNav />
          </Col>
          <Col md={9}>
            <Switch>
              <Route exact path="/admin">
                <WelcomeAdmin />
              </Route>
              <Route path="/admin/orderinfo">
                <OrdersInfo />
              </Route>

              <Route path="/admin/addservice">
                <AddService />
              </Route>

              <Route path="/admin/manageservice">
                <ManageService />
              </Route>
              <Route path="/admin/addfeatures">
                <AddFeatures />
              </Route>
              <Route path="/admin/managefeatures">
                <ManageFeatures />
              </Route>
              <Route path="/admin/managereviews">
                <ManageReview />
              </Route>
              <Route path="/admin/addadmin">
                <AddAdmin />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
      <Banner
        msg="
Explore Over The World With OurNet"
      />
      <Footer />
    </div>
  );
}
