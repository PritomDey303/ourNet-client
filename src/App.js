import "aos/dist/aos.css"; // You can also use <link> for styles
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CheckOut from "./components/normal-components/CheckOut/CheckOut";
import ContactSection from "./components/normal-components/ContactSection/ContactSection";
import Home from "./components/normal-components/Home/Home";
import Login from "./components/normal-components/Login/Login";
import PrivateRoute from "./components/normal-components/Login/PrivateRoute/PrivateRoute";
import "./components/normal-components/Review/Review";
import Review from "./components/normal-components/Review/Review";
export const UserContext = createContext();
function App() {
  const [LoggedInUser, setLoggedInUser] = useState({});
  const [Product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [Feature, setFeature] = useState([]);
  console.log(LoggedInUser);
  return (
    <div className="App">
      <UserContext.Provider
        value={[
          LoggedInUser,
          setLoggedInUser,
          Product,
          setProduct,
          reviews,
          setReviews,
          Feature,
          setFeature,
        ]}
      >
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>

            <PrivateRoute path="/checkout/:p_id">
              <CheckOut />
            </PrivateRoute>
            <Route path="/contact">
              <ContactSection />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
