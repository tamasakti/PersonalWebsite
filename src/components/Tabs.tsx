import React, { useState } from "react";

const Tab1 = () => {
  return (
    <div
      style={{ border: "1px solid", margin: "10px", padding: "20px" }}
      className="active"
    >
      <p>tab1 shows</p>
    </div>
  );
};

const Tab2 = () => {
  return (
    <div style={{ border: "1px solid", margin: "10px", padding: "20px" }}>
      <p>tab2 shows</p>
    </div>
  );
};

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="App">
      <div className="tabs">
        <div className="tab-link" style={{ display: "flex" }}>
          <p
            onClick={handleTab1}
            className={activeTab === "tab1" ? "active" : ""}
            style={{
              cursor: "pointer",
              padding: "20px",
              border: "1px solid",
              margin: "0px 10px",
            }}
          >
            Tab1
          </p>
          <p
            onClick={handleTab2}
            className={activeTab === "tab2" ? "active" : ""}
            style={{
              cursor: "pointer",
              padding: "20px",
              border: "1px solid",
              margin: "0px 10px",
            }}
          >
            Tab2
          </p>
        </div>
        <div className="outlet">
          {activeTab === "tab1" ? <Tab1 /> : <Tab2 />}
        </div>
      </div>
    </div>
  );
}
