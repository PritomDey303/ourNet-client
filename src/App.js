import "aos/dist/aos.css"; // You can also use <link> for styles
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CheckOut from "./components/normal-components/CheckOut/CheckOut";
import ContactSection from "./components/normal-components/ContactSection/ContactSection";
import Home from "./components/normal-components/Home/Home";
import Review from "./components/normal-components/Review/Review";
function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/review">
            <Review />
          </Route>

          <Route path="/checkout/:p_id">
            <CheckOut />
          </Route>
          <Route path="/contact">
            <ContactSection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
