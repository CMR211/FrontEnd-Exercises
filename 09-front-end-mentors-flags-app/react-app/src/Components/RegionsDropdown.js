import React from 'react'
import styles from "./RegionsDropdown.css"
import clearIcon from "../Icons/clear_black_24dp.svg";

export default function RegionsDropdown ( {filterByRegion, clearFilter} ) {

  const [isHover, setHover] = React.useState(false);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const buttons = regions.map(
    item => <button onClick={() => filterByRegion(item)} className="searchbar">{item}</button>
  )

  return (
    <div 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      className="dropdown">
      <button className="searchbar">Filter by regions...</button>
      {!isHover ? null : (
        <div className="dropdown-menu">
          <button onClick={() => clearFilter()} className="searchbar">
            <img style={{height: "1.5rem", transform: "translate(-20%, 20%)"}} src={clearIcon} />
            Clear filter
          </button>
          {buttons}
        </div>
      ) }
    </div>
  )
}