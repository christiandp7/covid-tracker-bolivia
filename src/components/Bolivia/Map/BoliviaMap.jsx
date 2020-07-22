import React, { useState } from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';

import bolivia from '../../../assets/maps/bolivia.json';

import MapLoader from '../../Loaders/MapLoader'

import BolPopOver from '../PopOvers/BolPopOver'


function BoliviaMap({ data }) {

  
  const style = { margin: '1rem auto', width: '350px' };


  const [dep, setDep] = useState('');

  


  const getDepSelectedData = (allDeps) => {
    let departmentData = {};
    allDeps.map((department) => {
      if(department.iso.toLowerCase() === dep){
        //return country.country
        departmentData = {
          name: department.name,
          flag: department.flag2,
          population: department.population,

          lastUpdate: department.date,

          cases: department.total.cases,
          deaths: department.total.deaths,
          recovered: department.total.recovered,
          active: department.total.active,
          
          todayCases: department.today.cases,
          todayDeaths: department.today.deaths,
          todayRecovered: department.today.recovered,
        }
      } else {

      }
    })
    return departmentData;
  }


  const handleDepClick = (eltarget) => {
    //console.log("el target: " + eltarget)
    setDep(eltarget.attributes.id.value) // map id -> iso
  }

  const layerProps = {
    className: "boldep",
    onClick: ({ target }) => handleDepClick(target)
  }



  
  if(!data[0]){
    return ( <MapLoader /> )
  }

  return (
    <div className="vector_map bolivia_map" id="bolmap" style={style}>
      <VectorMap {...bolivia} layerProps={layerProps} />

      <BolPopOver 
        depTarget={dep}
        mapa="bolmap"
        data={getDepSelectedData(data)} 
      />

    </div>
  )
}

export default BoliviaMap