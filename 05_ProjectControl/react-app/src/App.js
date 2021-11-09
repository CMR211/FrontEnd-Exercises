import React from "react";
import "./App.css";
import ContentWrapper from "./Components/ContentWrapper";
import NavBar from "./Components/NavBar";

function App() {
  const [activePanel, setActivePanel] = React.useState("Projektowanie");
  return (
    <div>
      <NavBar activePanel={activePanel} setActivePanel={setActivePanel} />
      <ContentWrapper activePanel={activePanel}/>
    </div>
  );
}

export default App;
