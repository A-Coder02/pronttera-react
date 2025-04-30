import React from "react";

const Dashboard = ({ buttonName, onClickButton }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          localStorage.removeItem("data");
        }}
      >
        Logout
      </button>
      <button
        onClick={() => {
          onClickButton;
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Dashboard;
