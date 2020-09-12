import React, { useEffect } from 'react';
import './App.css';
import Spinner from "./Spinner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './home';
import BugTracker from "./bugTracker";
import Projects from "./projects";
import bugActionActionCreators from './bugTracker/actions';
import { useDispatch } from 'react-redux';

function App() {
  return (
    <Router>
      <h1>My App</h1>
      <div>
        <span>
          {" "}
          [ <Link to="/home">Home</Link> ]{" "}
        </span>
        <span>
          {" "}
          [ <Link to="/spinner">Spinner</Link> ]{" "}
        </span>
        <span>
          {" "}
          [ <Link to="/bugs">Bugs</Link> ]{" "}
        </span>
        <span>
          {" "}
          [ <Link to="/projects">Projects</Link> ]{" "}
        </span>
      </div>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>

        <Route exact path="/bugs">
          <BugTracker />
        </Route>
        <Route path="/bugs/projects/:id">
          <div>
            <p>Bugs for a project</p>
            <BugTracker />
          </div>
        </Route>
        <Route path="/spinner">
          <Spinner />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
