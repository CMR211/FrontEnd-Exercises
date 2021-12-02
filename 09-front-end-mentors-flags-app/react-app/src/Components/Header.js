import React from 'react'
import styles from "./Header.css"

export default Header;

function Header ( {colorMode, setColorMode, colors} ) {

  function toggleColorMode () {
    if (colorMode === "light") setColorMode("dark");
    if (colorMode === "dark") setColorMode("light");
  }

  return (
    <header style={colors[colorMode]}>
      <div>
        <h1>Where in the world?</h1>
        <button 
        className="minimal-button"
        onClick={toggleColorMode}>Dark Mode</button>
      </div>
    </header>
  )
}