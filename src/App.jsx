import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  // todo: Add Not Found Page
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
  ]);

  return (
    <div className="max-w-[1900px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
