import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_EXPRESS_URL}/data`)
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Test</h1>
      </div>
    </div>
  );
}

export default App;
