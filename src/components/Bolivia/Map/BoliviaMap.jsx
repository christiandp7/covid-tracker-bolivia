import React, { useState } from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';

import bolivia from '../../../assets/maps/bolivia.json';
import './Map.module.css'

//export const BoliviaMap = () => <VectorMap {...bolivia} />;

function BoliviaMap() {

  const style = { margin: '1rem auto', width: '400px' };

  const [hovered, setHovered] = useState('None');
  const [clicked, setClicked] = useState('None');

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value)
  };

  return (
    <div style={style}>
      <VectorMap {...bolivia} layerProps={layerProps} />
      <hr />
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>
    </div>
  )
}

export default BoliviaMap