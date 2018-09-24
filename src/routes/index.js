import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Login from "../components/Login";
//import Signup from "../components/Signup";
import Home from "../components/Home";
import TaskDetails from "../components/TaskDetails";
//import Employee from "../components/Employee";
//import Main from "../components/Main";
import CreateTask from "../components/CreateTask";
import EmpStatus from "../components/EmpStatus";
import CommentsDisplay from "../components/CommentsDisplay";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        {/* <Route exact path="/home/:id" render={props => <Home {...props} />} /> */}
        <Route exact path="/taskDetails/:id" render={props => <TaskDetails {...props} />} />
        {/* <Route exact path="/signup" render={props => <Signup {...props} />} /> */}
        {/* <Route exact path="/employeeRegister" render={props => <Employee {...props} />} /> */}
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/createTask" render={props => <CreateTask {...props} />} />
        <Route exact path="/empStatus" render={props => <EmpStatus {...props} />} />
        <Route exact path="/commentsDisplay" render={props => <CommentsDisplay {...props} />} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
