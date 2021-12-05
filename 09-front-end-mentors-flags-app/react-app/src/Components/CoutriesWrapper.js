import React from 'react'
import Country from './Country';
import styles from "./CountriesWrapper.css"

export default CountriesWrapper;

function CountriesWrapper ( {countries} ) {

  const countriesCards = countries.map(
    item => <Country countries={countries} countryID={countries.indexOf(item)} />
  )

  return (
    <div id="countries-wrapper">
      {countriesCards}
    </div>
  )
}