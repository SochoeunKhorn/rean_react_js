import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, About, Contact } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
