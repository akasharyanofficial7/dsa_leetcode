import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";

const PrivateRoute = () => {
  let loggedin = false;

  if (loggedin) {
    return <Outlet />;
  } else {
    return "Please LoggedIn";
  }
};

export default PrivateRoute;
