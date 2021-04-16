import React from "react";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import AddProduct from "./AddProduct/AddProduct";
import AdminNav from "./AdminNav/AdminNav";

export default function Admin() {
  return (
    <div>
      <Navigation />
      <Row>
        <Col md={3}>
          <AdminNav />
        </Col>
        <Col md={9}>
          <Router>
            <Switch>
              <Route exact path="/admin">
                <AddProduct />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
