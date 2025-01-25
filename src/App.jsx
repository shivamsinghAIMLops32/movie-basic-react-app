import React from "react";
import Card from "./components/Card";
import Search from "./components/Search";

const App = () => {
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
              Find <span className="text-gradient">movies </span> you'll enjoy without hassle
            </h1>
          </header>
          
          <Search/>
        </div>
      </div>
    </main>
  );
};

export default App;
