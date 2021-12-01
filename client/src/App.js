import './index.css';
import './App.css';
import React from 'react';
import Tabs from "./Components/TabComponent/Tabs";
function App() {
  return (
    <div className="App">
        <header>
          <h1>
              <header> The Northview Homework Matrix</header> <br></br> Student/Parent <br></br> and Teacher Page
              
          </h1>
        </header>
      <Tabs />
    </div>
    
  );
}
export default App;