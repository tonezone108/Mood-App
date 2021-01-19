import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Home from "./containers/Home";
import Login from "./containers/Login";

// Write checkAuth function here


const checkAuth = () => {
const cookies = cookie.parse(document.cookie);
var isTrueSet = (cookies["loggedIn"] === 'true');
return isTrueSet
}



// Check the cookies for a cookie called "loggedIn"

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
  );
};

export default Router;
