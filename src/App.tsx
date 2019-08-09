import React from "react";
import "./App.scss";
import Header from "./components/header";
import Home from "./components/home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
