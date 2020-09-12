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
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(bugActionActionCreators.load());
  },[dispatch]);

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
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/bugs">
          <BugTracker />
        </Route>
        <Route path="/spinner">
          <Spinner />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
