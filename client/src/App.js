import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home'
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Layout } from './components/layout/Mainlayout/layout';
import NavigationBar from './components/layout/Nav-bar/NavigationBar';
import { Alert } from 'react-bootstrap';

import LoginLanding from './components/layout/Login/LoginLanding';
import Register from './components/layout/Login/Register';
import Login from './components/layout/Login/Login';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Alert /> */}
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/loginlanding" component={LoginLanding} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Layout>
        </Router>


      </React.Fragment>
    );
  }
}

export default App;