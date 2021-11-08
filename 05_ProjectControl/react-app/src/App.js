import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LabeledContainer from "./Components/LabeledContainer";
import NavBar from "./Components/NavBar";

function App() {
  const [activePanel, setActivePanel] = React.useState("Projektowanie");
  return (
    <div>
      <NavBar activePanel={activePanel} setActivePanel={setActivePanel} />
      <LabeledContainer title="Test" className="paper">
        <p>Infoasd</p>
      </LabeledContainer>
    </div>
  );
}

export default App;
