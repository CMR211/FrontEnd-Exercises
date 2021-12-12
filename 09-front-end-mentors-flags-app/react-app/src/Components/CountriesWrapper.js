import React from 'react'
import Country from './Country';
import Modal from './Modal';
import styles from "./CountriesWrapper.css"

export default CountriesWrapper;

function CountriesWrapper ( {countries} ) {

  const countriesCards = countries.map( item => 
    <Country 
      countries={countries} 
      countryID={countries.indexOf(item)} 
      showModal={() => showModal()}
    />
  )

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalCountryID, setModalCountryID] = React.useState();

  function showModal (countryID) {
    setModalCountryID(countryID);
    setIsModalVisible(true);
  }

  function hideModal () {
    setIsModalVisible(false);
  }

  return (
    <div id="countries-wrapper">
      {countriesCards}
      {isModalVisible && 
        <Modal 
          countryID={modalCountryID} 
          hideModal={hideModal} 
          countries={countries}
        /> 
      }
    </div>
  )
}