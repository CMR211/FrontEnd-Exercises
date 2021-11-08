import React from "react";
import LabeledContainer from "./LabeledContainer";
import NavItem from "./NavItem";
import EditText from "./EditText";

function NavBar({ id, className, activePanel, setActivePanel }) {

  const styles = {
    container: {
      backgroundColor: "gray",
      maxWidth: "40rem",
      margin: "1rem auto",
      display: "flex",
    },
    navbarLeft: {
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-end",
    },
    navbarDivider: {
      backgroundColor: "white",
      minWidth: "5px",
    },
    titles: {
      padding: "1rem",
      color: "white",
      textAlign: "right",
    }
  }


  return (
    <div id={id} className={className} style={styles.container}>
      <div id="navbar-left" style={styles.navbarLeft}>
        <EditText><h2 style={styles.titles}>{window.$projekt.inwestor}</h2></EditText>
        <EditText><h1 style={styles.titles}>{window.$projekt.nazwa}</h1></EditText>
      </div>
      <div id="navbar-divider" style={styles.navbarDivider}></div>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
        }}>
        <NavItem
          name="Projektowanie"
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />
        <NavItem
          name="Uzgodnienia"
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />
        <NavItem
          name="Zgłoszenie"
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />
      </div>
    </div>
  );
}

export default NavBar;
