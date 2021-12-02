import React from 'react'
import styles from "./Country.css"

export default Country;

function Country () {
  return (
    <div className="country">
      <img />
      <div>
        <h2>Country Name</h2>
        <p><span>Population:</span>10 252 555</p>
        <p><span>Region:</span>Americas</p>
        <p><span>Capital:</span>Brasil</p>
      </div>
    </div>
  )
}