import React from "react";
import removeIcon from "../Icons/not_send_black_24dp.svg";
import addIcon from "../Icons/add_circle_outline_black_24dp.svg";

function Plots(props) {

  const examplePlots = [
    { id: 1, identyfikator: "021402_4.0001.AR_31.2/4" },
    { id: 2, identyfikator: "021402_4.0001.AR_31.42/18" },
    { id: 3, identyfikator: "021402_4.0001.AR_31.42/2" },
  ]; 

  const [arrPlots, setArrPlots] = React.useState(examplePlots);

  React.useEffect(() => {

    const getPlotDataFromWeb = () => {

      const plotID = "021402_4.0001.AR_31.2/4";

      fetch(`https://uldk.gugik.gov.pl/?request=GetParcelByIdOrNr&id=${plotID}`)
      .then(res => res.text())

      .then(text => {
        let dzialka = {};
        dzialka.identyfikator = plotID;
        dzialka.powiat = text.split("|").slice(0,1).toString().slice(2);
        dzialka.gmina = text.split("|").slice(1,2).toString();
        dzialka.gmina = text.split("|").slice(1,2).toString();
        dzialka.obreb = text.split("|").slice(2,3).toString();
        dzialka.nrDzialki = plotID.split(".").slice(-1).toString();
        if (plotID.includes("AR")) dzialka.arkusz = `AR${plotID.split(".").slice(-2,-1).toString().slice(-2)}`;
        setArrPlots(dzialka)
      })

    }

    getPlotDataFromWeb();

  }, [])

  function handleRemoveItem(key) {
    setArrPlots(arrPlots.filter((item) => item.id !== key));
  }

  const handleAddItem = (event) => {};

  const ListOfPlots = mapPlots();

  function mapPlots() {

    if (arrPlots === undefined) return console.log("Error, arrPlots is undefined")  ;
    if (arrPlots.length === 0) return;


    return arrPlots.map((item) => (
      <li style={{ margin: "0 0 0.5rem 0" }} key={item.id}>
        <span>
          <span style={{ margin: "0 1rem 0 0" }}>
            Identyfikator:{" "}
            <span style={{ fontWeight: "bold" }}>{item.identyfikator} </span>
          </span>
          <span style={{ margin: "0 1rem 0 0" }}>
            Nr działki: <span style={{ fontWeight: "bold" }}>{item.nr}</span>
          </span>
          <span style={{ margin: "0 1rem 0 0" }}>
            Obręb: <span style={{ fontWeight: "bold" }}>{item.obrebnr}</span>
          </span>
        </span>
        <PlotButton
          onClick={() => handleRemoveItem(item.id)}
          text="Usuń działkę"
          icon={removeIcon}></PlotButton>
      </li>
    ));
  }

  return (
    <div>
      <ol style={{ margin: 0, padding: "0 1.5rem", color: "#666" }}>
        {ListOfPlots}

        <PlotButton
          onClick={handleAddItem}
          text="Dodaj działkę"
          icon={addIcon}></PlotButton>
      </ol>
    </div>
  );
}

function PlotButton({ onClick, icon, text, itemToDelete }) {
  const style = {
    border: "none",
    fontSize: "0.75rem",
    display: "inline-flex",
    flexFlow: "row",
    alignItems: "center",
    borderRadius: "0.5rem",
    transform: "translate(0.5rem, 0.4rem)",
    padding: "0.2rem 0.8rem",
  };

  return (
    <button style={style} onClick={onClick}>
      <img alt="btn" src={icon} style={{ margin: "0 0.2rem 0 0 " }} />
      {text}
    </button>
  );
}



export default Plots;
