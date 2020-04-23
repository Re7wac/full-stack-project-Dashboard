import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Layout } from "./components/layout/Mainlayout/layout";
import NavigationBar from "./components/layout/Nav-bar/NavigationBar";
import { Alert } from "react-bootstrap";

import LoginLanding from "./components/layout/Login/LoginLanding";
import Register from "./components/layout/Login/Register";
import Login from "./components/layout/Login/Login";
import Dashboard from "./components/layout/Login/Dashboard";

import jwt_decode from "jwt-decode";
import setAuthToken from "../src/utlis/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        {/* <Alert /> */}{" "}
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />{" "}
              <Route path="/about" component={About} />{" "}
              <Route path="/contact" component={Contact} />{" "}
              <Route path="/loginlanding" component={LoginLanding} />{" "}
              <Route exact path="/register" component={Register} />{" "}
              <Route exact path="/login" component={Login} />{" "}
              <Route exact path="/dashboard" component={Dashboard} />{" "}
            </Switch>{" "}
          </Layout>{" "}
        </Router>{" "}
      </React.Fragment>
    );
  }
}

export default App;
