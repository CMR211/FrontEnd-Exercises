import React from "react";
import EditableParagraph from "./EditableParagraph";
import ParagraphTitle from "./ParagraphTitle";

const divStyle = {
  maxWidth: "40rem",
  margin: "auto",
  position: "relative",
};

function Panel1(props) {
  return (
    <div style={divStyle}>
      <h3 className="parTitle">Informacje podstawowe</h3>
      <EditableParagraph title="Kategoria drogi" data="kategoria" />
      <EditableParagraph title="Klasa drogi" data="klasa" />
      <h3 className="parTitle">Wymagania wg zamawiającego</h3>
      <p>Szerokość jezdni</p>
      <h3 className="parTitle">Działki</h3>
      <h3 className="parTitle">Linki</h3>
    </div>
  );
}

export default Panel1;
