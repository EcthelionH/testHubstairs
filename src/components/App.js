import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Music from './music';
import Graph from './graph';
import Prime from './prime';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route path='/music' component={Music} />
            <Route path='/prime' component={Prime}/>
            <Route path='/graph' component={Graph}/>
          </Switch>
      </div>
    );
  }
}

export default App;
