import React from "react"
import styles from "./Modal.css"

const iconClose = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>

export default function Modal ( {countryID, hideModal, countries} ) {
  return (
    <div 
    className="modal-main">
      <div className="modal-content">
        <button onClick={() => hideModal()}>{iconClose}</button>
        <img src={countries[countryID]["flag"]} />
      </div>
      <div className="clicktohide" onClick={() => hideModal()}></div>
    </div>
  )
}