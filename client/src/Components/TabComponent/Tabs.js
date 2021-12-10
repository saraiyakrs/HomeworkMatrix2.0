import React, { useState } from "react";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";
import Login from "../AllTabs/Login";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  
  <ul className="nav">
    <li className={activeTab === "tab1" ? "active" : ""}>Tab 1</li>
    <li className={activeTab === "tab2" ? "active" : ""}>Tab 2</li>
  </ul>
  return (
    <div className="Tabs">
      <ul className="nav">
  <li
    className={activeTab === "tab1" ? "active" : ""}
    onClick={handleTab1}
  >
    STUDENT/TEACHER LINKS
  </li>
  <li
    className={activeTab === "tab2" ? "active" : ""}
    onClick={handleTab2}
  >
   LOGIN FOR STUDENTS
    
  </li>
</ul>

      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : activeTab === "tab2" ? <SecondTab /> : <Login/>}
      </div>


    </div>



  );
};
export default Tabs;