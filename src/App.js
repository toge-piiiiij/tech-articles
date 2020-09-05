import React from 'react';
import './App.css';
import RandomlyMurMur from './articles/randomly-murmur'
import Git from './articles/git'
import { Switch, Route, NavLink } from "react-router-dom";
import { Button } from '@material-ui/core'

function App() {
  return (
    <div className="tech-articles">
      <div className="article-category">
        <NavLink to="/randomlymurmur" activeClassName="current-category">
          <Button size="large">Randomly MurMur..</Button>
        </NavLink>
        <NavLink to="/git" activeClassName="current-category">
          <Button size="large">Git</Button>
        </NavLink>
      </div>

      <Switch>
        <Route path="/randomlymurmur">
          <RandomlyMurMur />
        </Route>
        <Route path="/git">
          <Git />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
