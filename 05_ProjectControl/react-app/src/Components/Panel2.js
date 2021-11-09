import React from "react";

const divStyle = {
  maxWidth: "40rem",
  margin: "auto",
  position: "relative",
};

function Panel2(props) {
  return (
    <div style={divStyle}>

      <h3>Konserwator</h3>
        <p>Opinia konserwatora</p>
        <p>Decyzja – pozwolenie na prowadzenie badań archeologicznych</p>

      <h3>Sieci</h3>
        <p>Warunki i uzgodnienia z gestorami</p>
        <p>ZUD – Zespół Uzgadniania Dokumentacji</p>

      <h3>Zgłoszenie/pozwolenie wodnoprawne</h3>
        <p>Regionalny Zarząd Zlewni</p>

      <h3>Stała Organizacja Ruchu</h3>
        <p>Opinie</p>
        <p>Zatwierdzenie</p>

      <h3>Czasowa Organizacja Ruchu</h3>
        <p>Opinie</p>
        <p>Zatwierdzenie SP/DUW</p>

    </div>
  );
}

export default Panel2;
