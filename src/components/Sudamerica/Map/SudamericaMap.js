import React, { useState } from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';

import sudamerica from '../../../assets/maps/sudamerica.json';

import MapLoader from '../../Loaders/MapLoader'

import SudPopOver from '../PopOvers/SudPopOver'

//export const BoliviaMap = () => <VectorMap {...bolivia} />;

function SudamericaMap({ data }) {

  let countryData = {}
  const style = { margin: '1rem auto', width: '289px' };

  //const [hovered, setHovered] = useState('None');
  const [country, setCountry] = useState('');

  
  /*const getCountrySelectedData = (allData) => {
    allData.map((co) => {
      if(co.countryInfo.iso2.toLowerCase() === country){
        //return country.country
        countryData.name = co.country;
        countryData.flag = co.countryInfo.flag;
        countryData.cases = co.cases;
        countryData.deaths = co.deaths;
        countryData.recovered = co.recovered;
        countryData.active = co.active;
        
        countryData.todayCases = co.todayCases;
        countryData.todayDeaths = co.todayDeaths;
        countryData.todayRecovered = co.todayRecovered;

        countryData.population = co.population;
        countryData.tests = co.tests;

        countryData.lastUpdate = co.updated;
      }
    })
    return countryData;
  }*/





  const getCountrySelectedData = (allData) => {
    return allData.find(co => co.countryInfo.iso2.toLowerCase() === country)
  }

  const handleCountryClick = (eltarget) => {
    
    setCountry(eltarget.attributes.id.value) // Iso2 Value
  }

  const layerProps = {
    className: "sudcountry",
    //onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    //onMouseLeave: ({ target }) => setHovered('None'),
    //onClick: ({ target }) => setCountry(target.attributes.id.value)
    onClick: ({ target }) => handleCountryClick(target)
  };

  //console.log(data)
  
  if(!data[0]){
    return ( <MapLoader /> )
  }

  return (
    <>
    <div className="vector_map sudamerica_map" id="sudmap" style={style}>
      <VectorMap {...sudamerica} layerProps={layerProps} />
      {/*<hr />
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: <code>{country}</code></p>*/}
      

      {/*<Popover 
          trigger="focus"
          placement="auto" 
          isOpen={popoverOpen} 
          target="sudmap"
          toggle={toggle}
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>*/}
      

      <SudPopOver 
        countryTarget={country}
        mapa="sudmap"
        data={getCountrySelectedData(data)} 
      />

    </div>
    </>
  )
}

export default SudamericaMap