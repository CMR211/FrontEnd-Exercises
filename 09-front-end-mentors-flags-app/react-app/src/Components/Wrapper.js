import React from "react";
import styles from "./Wrapper.css";
import CountriesWrapper from "./CoutriesWrapper"

export default Wrapper;

function Wrapper ( {colors, colorMode} ) {

  const [filteredCountriesList, setFilteredCountriesList] = React.useState();

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

      <CountriesWrapper 
        colors={colors} 
        colorMode={colorMode} 
        countries={filteredCountriesList} />

    </main>
  )
}