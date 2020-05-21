import React from "react";
import Login from "./login.jsx";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {" "}
      {isLoggedIn ? <h1>Hello User</h1> : <Login />}
    </div>
  );
}

export default App;
