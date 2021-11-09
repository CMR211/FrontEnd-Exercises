import React from "react";
import LabeledContainer from "./LabeledContainer";
import NavItem from "./NavItem";
import EditText from "./EditText";


function NavBar({ id, className, activePanel, setActivePanel }) {

  const styles = {
    container: {
      background: 'linear-gradient(22deg, #000000aa 30%, #ffffffcc 100%), url("https://i1.wp.com/enterprisetalk.com/wp-content/uploads/2019/10/Democratic-Republic-of-Congo-Adopts-Green-Nano-Road-Building-Technology.jpg?fit=1600%2C900&ssl=1") 70% 60% ',
      backgroundSize: "cover",
      // backgroundImage: 'url("https://i1.wp.com/enterprisetalk.com/wp-content/uploads/2019/10/Democratic-Republic-of-Congo-Adopts-Green-Nano-Road-Building-Technology.jpg?fit=1600%2C900&ssl=1")',
      maxWidth: "40rem",
      margin: "1rem auto",
      display: "flex",
      borderRadius: "0.25rem",
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
      padding: "0 1rem",
      color: "white",
      textAlign: "right",
    }
  }


  return (
    <div id={id} className={className} style={styles.container}>
      <div id="navbar-left" style={styles.navbarLeft}>
        <EditText fontSize="1rem"><h2 style={styles.titles}>{window.$projekt.inwestor}</h2></EditText>
        <EditText fontSize="1.66rem"><h1 style={styles.titles}>{window.$projekt.nazwa}</h1></EditText>
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
