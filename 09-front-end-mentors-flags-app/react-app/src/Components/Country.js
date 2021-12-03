import React from 'react'
import styles from "./Country.css"

export default Country;

function Country ( {countries, countryID} ) {
  return (
    <div className="country">
      <img src={countries[countryID]["flags"]["svg"]} />
      <div>
        <h2>{countries[countryID]["name"]}</h2>
        <p><span>Population:</span>10 252 555</p>
        <p><span>Region:</span>Americas</p>
        <p><span>Capital:</span>Brasil</p>
      </div>
    </div>
  )
}