import React from 'react';
import './App.css';
import {Route } from 'react-router-dom';
import Home from './components/Home';
import  About from './components/About';
import  {Link} from "react-router-dom";


class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>

        </div>
      );
    }
}

export default App;