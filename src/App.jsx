import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Router setup
// useNavigate for navigations

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  useEffect(() => {
    const pathname = location.pathname;
    let data = localStorage.getItem("data");
    data = JSON.parse(data);

    // if path is / ,
    // first check logged in or not
    // if logged in, ok
    // if not navigate to /login

    if (pathname == "/") {
      if (data !== null) {
        console.log("authorised");
      } else {
        // navigate to /login
        // navigate("/login");
        console.log("not authorised");
        location.href = "/login";
      }
    }
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
