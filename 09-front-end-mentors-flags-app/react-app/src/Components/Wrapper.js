import React from "react";
import styles from "./Wrapper.css";
import CountriesWrapper from "./CoutriesWrapper"

export default Wrapper;

function Wrapper ( {colors, colorMode} ) {

  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  const [fetchedCountriesList, setFetchedCountriesList] = React.useState();
  const [filteredCountriesList, setFilteredCountriesList] = React.useState();

  React.useEffect(() => {
    const API_URL = `https://restcountries.com/v2/all`;
    async function fetchAPI () {
      setIsDataLoaded(false);
      const response = await fetch(API_URL);
      const result = await response.json();
      setFetchedCountriesList(result);
      setIsDataLoaded(true);
    };
    fetchAPI();
  }, [] );

  

  return (
    <main style={colors[colorMode]}>

      <div id="searchdiv">
        <input 
          className="searchbar"
          id="countrysearch" 
          placeholder="Search for a country..." />
        <input 
          list="regions" 
          className="searchbar" 
          id="regionsearch"
          placeholder="Filter by Region" />
          <datalist id="regions">
            <option value="Africa" />
            <option value="America" />
            <option value="Asia" />
            <option value="Europe" />
            <option value="Oceania" />
          </datalist>
      </div>

      {isDataLoaded ? 
        (
          <CountriesWrapper 
            colors={colors} 
            colorMode={colorMode} 
            countries={fetchedCountriesList} /> ) :
        (
            <div>Loading....</div>
        )
      }

    </main>
  )
}