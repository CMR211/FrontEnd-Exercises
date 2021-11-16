import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Example projekt data
const projekt = {
  nazwa: "Przebudowa drogi wojewódzkiej DW451 w miejscowości Syców polegająca na budowie chodnika wzdłuż ul. Kaliskiej",
  inwestor: "Zarząd Dróg Powiatowych w Oleśnicy",
  kategoria: "wojewódzka, publiczna",
  klasa: "Droga dojazdowa KDD 3.01",
  szerokoscJezdni: "Minimum 6,0 metra",
  konstrukcjaNawierzchni: "Jezdnia bitumiczna, konstrukcja nawierzchni KR1",
  informacjeDodatkowe: "Jezdnia okrawężnikowana, z obustronnymi chodnikami o szerokości 2,0 metra. Konstrukcja chodników z kostki betonowej typu Holland 8 cm w kolorze szarym. Należy zastosować ściek przykraweżnikowy z kostki betonowej 16x16 cm. ",
  konserwatorOpinia: {
    status: "notSend",
    date: "", },
  konserwatorDecyzja: {
    status: "notNeeded",
    date: "", },
  }

console.log(projekt);

// Check if there is existing projekt data if not use the example above
function setProjektData () {
  if (localStorage.getItem("projekt") != null) return;
  localStorage.setItem("projekt", JSON.stringify(projekt));
}
setProjektData();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
