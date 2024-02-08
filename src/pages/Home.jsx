import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Outlet />
      <Link to="/about">About</Link>
      <Link to="/contact" style={{ paddingLeft: 20 }}>
        Contact
      </Link>
    </div>
  );
};

export default Home;
