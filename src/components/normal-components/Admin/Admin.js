import React from "react";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import AddFeatures from "./AddFeatures/AddFeatures";
import AddProduct from "./AddProduct/AddProduct";
import AdminNav from "./AdminNav/AdminNav";
import ManageFeatures from "./ManageFeatures/ManageFeatures";
import ManageReview from "./ManageReview/ManageReview";
import OrdersInfo from "./OrdersInfo/OrdersInfo";
import ProductInfo from "./ProductInfo/ProductInfo";
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
              <Route path="/admin/addproducts">
                <AddProduct />
              </Route>
              <Route path="/admin/productinfo">
                <ProductInfo />
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
            </Switch>
          </Col>
        </Row>
      </Router>
      <Footer />
    </div>
  );
}
