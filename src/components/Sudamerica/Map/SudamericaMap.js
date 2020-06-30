import React, { useState } from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';

import sudamerica from '../../../assets/maps/sudamerica.json';

import MapLoader from '../../Loaders/MapLoader'

//export const BoliviaMap = () => <VectorMap {...bolivia} />;

function SudamericaMap({ data }) {

  const style = { margin: '1rem auto', width: '289px' };

  const [hovered, setHovered] = useState('None');
  const [clicked, setClicked] = useState('None');

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value)
  };

  //console.log(data)
  
  if(!data[0]){
    return ( <MapLoader /> )
  }

  return (
    <div className="vector_map sudamerica_map" style={style}>
      <VectorMap {...sudamerica} layerProps={layerProps} />
      {/*<hr />
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>*/}
    </div>
  )
}

export default SudamericaMap