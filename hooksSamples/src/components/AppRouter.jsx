import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AddUser from "./AddUser";
import InvalidUrl from "./Invalidurl";
import Home from "./Home";
export default function AppRouter(props) {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/" render={props=><Redirect to="/users"/>}/>
        <Route exact path="/users" />
        <Route exact path="/addUser" />
        <Route/>
      </Switch>
    </Router>
  );
}
