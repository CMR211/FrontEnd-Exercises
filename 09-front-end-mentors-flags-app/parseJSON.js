// JSON data contains all of the text entities used in this website
// Fetching it here in seperate script before the react script 

let DATA;

async function fetchAPI () {
  const response = await fetch("https://restcountries.com/v2/all");
  DATA = response.json();
}

fetchAPI();

console.table(DATA);
