import React from 'react'
import Country from './Country';
import styles from "./CountriesWrapper.css"

export default CountriesWrapper;

function CountriesWrapper ( {filteredCountriesList} ) {
  return (
    <div id="countries-wrapper">
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </div>
  )
}