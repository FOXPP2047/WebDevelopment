import React from "react";

function App() {
  setInterval(updateTime, 1000);

  const currTime = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [time, setTime] = React.useState(currTime);

  function updateTime() {
    setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
