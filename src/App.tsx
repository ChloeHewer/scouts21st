import React from "react";
import "./App.scss";
import HelloWorldContainer from "./containers/helloWorldContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <HelloWorldContainer />
      </div>
    </div>
  );
};

export default App;
