import { Routes, BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
