import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";


export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return<> <Navbar/> <Component {...props} /> </>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};