import React from "react";
import EditableParagraph from "./EditableParagraph";
import AgreementStatus from "./AgreementStatus";

const divStyle = {
  maxWidth: "40rem",
  margin: "auto",
  position: "relative",
};

function Panel2(props) {
  return (
    <div style={divStyle}>

      <h3 className="parTitle">Konserwator</h3>
        <EditableParagraph title="Opinia konserwatorska" data="kategoria" />
        <AgreementStatus title="Decyzja konserwatorska" />

      <h3 className="parTitle">Sieci</h3>
        <p>Warunki i uzgodnienia z gestorami</p>
        <p>ZUD – Zespół Uzgadniania Dokumentacji</p>

      <h3 className="parTitle">Zgłoszenie/pozwolenie wodnoprawne</h3>
        <p>Regionalny Zarząd Zlewni</p>

      <h3 className="parTitle">Stała Organizacja Ruchu</h3>
        <p>Opinie</p>
        <p>Zatwierdzenie</p>

      <h3 className="parTitle">Czasowa Organizacja Ruchu</h3>
        <p>Opinie</p>
        <p>Zatwierdzenie SP/DUW</p>

    </div>
  );
}

export default Panel2;
