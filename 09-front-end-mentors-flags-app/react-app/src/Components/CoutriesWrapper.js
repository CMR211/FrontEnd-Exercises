import React from 'react'
import Country from './Country';
import styles from "./CountriesWrapper.css"

export default CountriesWrapper;

function randomCountryID () {
  return Math.floor(Math.random()*250)
}

function CountriesWrapper ( {countries} ) {
  return (
    <div id="countries-wrapper">
      <Country countries={countries} countryID={randomCountryID()} />
      <Country countries={countries} countryID={randomCountryID()} />
      <Country countries={countries} countryID={randomCountryID()} />
      <Country countries={countries} countryID={randomCountryID()} />
      <Country countries={countries} countryID={randomCountryID()} />
      <Country countries={countries} countryID={randomCountryID()} />
      <Country countries={countries} countryID={randomCountryID()} />
    </div>
  )
}