import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
const App = () => {
  // if no auth, login
  // else dashboard
  // on login, see dashboard
  // on dashboard, on logout, see login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    console.log({ localStorageData: data });
    if (data == null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  function loginHandler(data) {
    console.log({ data });
    setIsLoggedIn(true);
    localStorage.setItem("data", JSON.stringify(data));
  }
  function logoutHandler() {
    setIsLoggedIn(false);
    localStorage.removeItem("data");
  }
  return (
    <div>
      {isLoggedIn ? (
        <Dashboard logoutHandler={logoutHandler} />
      ) : (
        <Login loginHandler={loginHandler} />
      )}
    </div>
  );
};

export default App;
