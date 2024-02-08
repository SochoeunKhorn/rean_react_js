import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h2>Layout Page</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
