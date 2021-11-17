import React from "react";
import EditableParagraph from "./EditableParagraph";
import Plots from "./Plots";

const divStyle = {
  maxWidth: "40rem",
  margin: "auto",
  position: "relative",
};

function Panel1(props) {
  return (
    <div style={divStyle}>
      <h3 className="parTitle">Stan istniejący</h3>
      <EditableParagraph title="Kategoria drogi" data="kategoria" />
      <EditableParagraph title="Klasa drogi" data="klasa" />
      <h3 className="parTitle">Wymagania wg zamawiającego</h3>
      <EditableParagraph title="Szerokość jezdni" data="szerokoscJezdni" />
      <EditableParagraph title="Konstrukcja nawierzchni" data="konstrukcjaNawierzchni" />
      <EditableParagraph title="Informacje dodatkowe" data="informacjeDodatkowe" />
      <h3 className="parTitle">Działki</h3>
      <Plots />
      <h3 className="parTitle">Linki</h3>
    </div>
  );
}

export default Panel1;
