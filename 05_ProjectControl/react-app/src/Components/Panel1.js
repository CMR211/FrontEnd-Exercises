import React from "react";

const divStyle = {
  maxWidth: "40rem",
  margin: "auto",
  position: "relative",
};

function Panel1(props) {
  return (
    <div style={divStyle}>
      <div
        style={{
          position: "absolute",
          border: "2px solid red",
          minWidth: "200px",
          minHeight: "200px",
          top: "0",
          right: "0",
        }}></div>
      <h3>Informacje podstawowe</h3>
      <p>Klasa drogi</p>
      <p>Kategoria drogi</p>
      <h3>Wymagania wg zamawiającego</h3>
      <p>Szerokość jezdni</p>
      <h3>Działki</h3>
    </div>
  );
}

export default Panel1;
