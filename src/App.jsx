import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import LayoutWrapper from "./LayoutWrapper";

const App = () => {
  // todo: Add Not Found Page
  const router = createBrowserRouter([
    {
      path: "",
      element: <LayoutWrapper />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
