import React from "react";
import "./App.scss";
import HelloWorldContainer from "./containers/helloWorldContainer";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HelloWorldContainer />
      </main>
    </div>
  );
};

export default App;
