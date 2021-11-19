import React from "react";
import removeIcon from "../Icons/not_send_black_24dp.svg";
import addIcon from "../Icons/add_circle_outline_black_24dp.svg";
import axios from "axios";

const examplePlots = [
  "021402_4.0001.AR_21.2",
  "021402_4.0001.AR_21.9",
  "021402_4.0001.AR_21.10/4",
  "021402_4.0001.AR_30.27", ]; 

async function fetchPlotData (id) {
  let response = await fetch(`https://uldk.gugik.gov.pl/?request=GetParcelByIdOrNr&id=${id}`) ;
  response = await response.text();
  return response;
}

async function changeFetchedResponse (id) {
  let response = await fetchPlotData(id);
  let dz = {};
    if (id.includes("AR")) dz.arkusz = `AR${id.split(".").slice(-2,-1).toString().slice(-2)}`;
    dz.identyfikator = id;
    dz.nrDzialki = id.split(".").slice(-1).toString();
  dz.powiat = await response.split("|").slice(0,1).toString().slice(2);
  dz.gmina = await response.split("|").slice(1,2).toString();
  dz.gmina = await response.split("|").slice(1,2).toString();
  dz.obreb = await response.split("|").slice(2,3).toString();
  return dz;
}

async function mapPlotsDataToPlotsID (array) {
  const newArray = [];
  let i = 0;
  for (let item of array) {
    newArray[i] = await changeFetchedResponse(item);
    i++      
  }
  console.table(newArray)
  return newArray;
}

function Plots(props) {

  const [plotIdList, setPlotIdList] = React.useState(examplePlots);  
  const [plotFullList, setPlotFullList] = React.useState();

  React.useEffect( () => {
    async function onmount () {
      let temp = await mapPlotsDataToPlotsID(plotIdList)
      setPlotFullList(temp);
    }
    onmount();
  }, [plotIdList]);

  function handleRemoveItem(key) {
    setPlotIdList(plotFullList.filter((item) => item.identyfikator !== key));
  }

  function handleAddItem (event) {};

  console.table(plotFullList);
  
  const ListOfPlots = mapPlots();
  function mapPlots() {

    if (plotFullList === undefined) return console.log("Error, arrPlots is undefined")  ;
    if (plotFullList.length === 0) return;

    return plotFullList.map((item) => (
      <li style={{ margin: "0 0 0.5rem 0" }} key={item.identyfikator}>
        <span>
          <span style={{ margin: "0 1rem 0 0" }}>
            Identyfikator:{" "}
            <span style={{ fontWeight: "bold" }}>{item.identyfikator} </span>
          </span>
          <span style={{ margin: "0 1rem 0 0" }}>
            Arkusz mapy: <span style={{ fontWeight: "bold" }}>{item.arkusz}</span>
          </span>
          <span style={{ margin: "0 1rem 0 0" }}>
            Nr działki: <span style={{ fontWeight: "bold" }}>{item.nrDzialki}</span>
          </span>
          <span style={{ margin: "0 1rem 0 0" }}>
            Obręb: <span style={{ fontWeight: "bold" }}>{item.obreb}</span>
          </span>
          <span style={{ margin: "0 1rem 0 0" }}>
            Gmina: <span style={{ fontWeight: "bold" }}>{item.gmina}</span>
          </span>
          <span style={{ margin: "0 1rem 0 0" }}>
            powiat: <span style={{ fontWeight: "bold" }}>{item.obreb}</span>
          </span>
        </span>
        <PlotButton
          onClick={() => handleRemoveItem(item.identyfikator)}
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
