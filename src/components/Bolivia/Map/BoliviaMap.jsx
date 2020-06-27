import React, { useState } from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import cx from 'classnames'

import bolivia from '../../../assets/maps/bolivia.json';
import styles from './Map.module.css'

import MapLoader from '../../Loaders/MapLoader'


function BoliviaMap({ data: { cases } }) {

  const style = { margin: '1rem auto', width: '350px' };

  const [hovered, setHovered] = useState('None');
  const [clicked, setClicked] = useState('None');

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value)
  };

  
  if(!cases){
    return ( <MapLoader /> )
  }

  return (
    <div className={cx(styles.bolivia_map)} style={style}>
      <VectorMap {...bolivia} layerProps={layerProps} />
      {/*<p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>*/}
    </div>
  )
}

export default BoliviaMap