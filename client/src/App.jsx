import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("flex-start");

  const handleFlexDirectionChange = (e) => {
    setFlexDirection(e.target.value);
  };

  const handleJustifyContentChange = (e) => {
    setJustifyContent(e.target.value);
  };

  const handleAlignItemsChange = (e) => {
    setAlignItems(e.target.value);
  };

  const flexContainerStyle = {
    display: "flex",
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    width: "650px",
    height: "650px",
    backgroundImage: `url("./public/21159783_6350849.webp")`,
    backgroundRepeat: "no - repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  const flexItemStyle = {
    width: "80px",
    height: "80px",
    margin: "20px",
  };

  return (
    <div>
      <div>
        <h1>Frohe Weihnachten! </h1>
        <p>
          Wähle die passenden Flex-Box Werte um die Geschenke unter dem Baum zu
          platzieren.{" "}
        </p>
        <label htmlFor="flexDirection">Flex Direction:</label>
        <select
          id="flexDirection"
          value={flexDirection}
          onChange={handleFlexDirectionChange}
        >
          <option value="row">Row</option>
          <option value="column">Column</option>
        </select>
      </div>

      <div>
        <label htmlFor="justifyContent">Justify Content:</label>
        <select
          id="justifyContent"
          value={justifyContent}
          onChange={handleJustifyContentChange}
        >
          <option value="flex-start">Flex Start</option>
          <option value="center">Center</option>
          <option value="flex-end">Flex End</option>
          <option value="space-between">Space Between</option>
          <option value="space-around">Space Around</option>
          <option value="space-evenly">Space-Evenly</option>
        </select>
      </div>

      <div>
        <label htmlFor="alignItems">Align Items:</label>
        <select
          id="alignItems"
          value={alignItems}
          onChange={handleAlignItemsChange}
        >
          <option value="flex-start">Flex Start</option>
          <option value="center">Center</option>
          <option value="flex-end">Flex End</option>
        </select>
      </div>

      <div style={flexContainerStyle}>
        <img style={flexItemStyle} src="./public/presents.png" />
        <img style={flexItemStyle} src="./public/presents.png" />
        <img style={flexItemStyle} src="./public/presents.png" />
      </div>
    </div>
  );
};

export default App;
