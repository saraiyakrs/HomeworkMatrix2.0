import './index.css';
import './App.css';
import React from 'react';
import Tabs from "./Components/TabComponent/Tabs";
import Login from "./Components/AllTabs/Login";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <header> The Northview Homework Matrix DataBase</header> <br>
          </br>

          <Login />
        </h1>
      </header>
      <Tabs />
      <div>
        <form onsubmit="console.log('You clicked submit.'); return false">
          <button type="submit">Submit</button>
        </form>
      
      </div>
    </div>

  );
}
export default App;