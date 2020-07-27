import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/Home';

import Register from './users/Register';
import Login from './sessions/Login';
import Logout from './sessions/Logout';

import Tours from './tours/Index';
import NewTour from './tours/New';
import EditTour from './tours/Edit';
import { Fragment } from "react";

function Routes ({user, setUser}) {
  return (
    <Switch>
      <Route exact path="/" render={
        renderProps => <Home
          {...renderProps}
          user={user}
        />
      }/>
      <Route exact path="/register" render={
        renderProps => <Register
          {...renderProps}
          setUser={setUser}
        />
      }/>
      <Route exact path="/login" render={
        renderProps => <Login
          {...renderProps}
          setUser={setUser}
        />
      }/>
      <Route exact path="/logout" render={
        renderProps => <Logout
          {...renderProps}
          setUser={setUser}
        />
      }/>
      
      {
        /*
          Tricked you!
          The routes have been completed to provide a better user experience.
          HOWEVER!!!

          In your own words, please explain what is happening in the logic below.
          ANSWER HERE:

        Define route path as render component with user's own view
        If user is logged in, then the /tours, /tours/new, /tours/edit will be rendered and user can only view their tours, not everyone else
        If not logged in, visitor will be redirect to home "/"

        */
      }
      <Route exact path="/tours" render={
        props => user ? (
          <Tours {...props} user={user} />
        ) : (
          <Redirect to="/"/>
        )
      }/>
      <Route exact path="/tours/new" render={
        props => user ? (
          <NewTour {...props} />
        ) : (
          <Redirect to="/"/>
        )
      }/>
      <Route exact path="/tours/edit" render={
        props => user ? (
          <EditTour {...props} />
        ) : (
          <Redirect to="/"/>
        )
      }/>
    </Switch>
  );
}

export default Routes;