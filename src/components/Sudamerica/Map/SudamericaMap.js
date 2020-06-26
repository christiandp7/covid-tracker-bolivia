import React, { useState } from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import cx from 'classnames'

import sudamerica from '../../../assets/maps/sudamerica.json';
import styles from './Map.module.css'

//export const BoliviaMap = () => <VectorMap {...bolivia} />;

function SudamericaMap() {

  const style = { margin: '1rem auto', width: '300px' };

  const [hovered, setHovered] = useState('None');
  const [clicked, setClicked] = useState('None');

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value)
  };


  return (
    <div className={cx(styles.sudamerica_map)} style={style}>
      <VectorMap {...sudamerica} layerProps={layerProps} />
      <hr />
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>
    </div>
  )
}

export default SudamericaMap