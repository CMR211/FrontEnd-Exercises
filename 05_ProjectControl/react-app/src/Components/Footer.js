function Footer() {
  const styles = {
    divMain: {
      backgroundImage: "repeating-linear-gradient(45deg, #ccc 0, #ccc 1px, transparent 0, transparent 50%)",
      backgroundSize: "10px 10px",
      borderTop: "2px solid black",
      color: "black",
      maxWidth: "40rem",
      margin: "1rem auto",
      // borderRadius: "0.5rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      padding: 0,
    },
    divSecondary: {
      margin: 0,
      padding: "0.5rem",
      fontSize: "1rem",
      textAlign: "center",
    },
    textReact: {
      padding: 0,
      margin: 0,
      fontWeight: "bold",
    },
    textNormal: {
      padding: 0,
      margin: 0,
      fontWeight: "bold",
    }
  };
  return (
    <div className="pattern-diagonal-lines-sm" style={styles.divMain}>
      <div
        style={Object.assign({
          gridColumn: "1 / span 2",
          gridRow: "1 / 2"
        }, styles.divSecondary)}>
        <p style={styles.textReact}>React</p>
      </div>
      <div
        style={Object.assign({
          gridColumn: "1 / 2",
          gridRow: "2 / 3"
        }, styles.divSecondary)}>
        <p style={styles.textNormal}>Bartosz Surma</p>
      </div>
      <div
        style={Object.assign({
          gridColumn: "2 / 3",
          gridRow: "2 / 3"
        }, styles.divSecondary)}>
        <p style={styles.textNormal}>Stworzono: listopad 2021</p>
      </div>
    </div>
  );
}

export default Footer;
