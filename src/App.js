import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Nav from 'components/Nav';
import Welcome from "components/Welcome";

class App extends Component {

  render() {
    return (
        <div className="App">
            <Nav />
        </div>
    );
  };
}
export default App;
