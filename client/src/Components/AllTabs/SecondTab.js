import React, { useState } from 'react';
import Schedule from "../Schedule";
import Login from "../AllTabs/Login";



const SecondTab = (id, submitLoginIn) => {
  const [isLoggedIn,setLoggedIn] = useState(false)
  return (
    <div className="SecondTab">
      
      {/* Second  tab content will go here */}
      {
        isLoggedIn ? <Schedule /> : <Login id={Login.id}
        setLoggedIn={setLoggedIn} />


      }
     
    </div>
    

  );
};
export default SecondTab;