import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Button from "./Button";
import { Menu } from "semantic-ui-react";
import Welcome from "components/Welcome";
import AboutPage from "components/About";

export default class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
        <Menu>
            <NavLink className="item" exact to='/'> Home 
          </NavLink>
          <NavLink className="item" to="/about">
               About
            </NavLink>
          </Menu>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

