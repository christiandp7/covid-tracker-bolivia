import React, { useState } from 'react'

import {
  Alert
} from 'reactstrap'

function BoliviaNotfication() {

  let lsVarName = 'bol-err-notification-2';

  const initialState = () => window.localStorage.getItem(lsVarName) === null ? true : false

  const [visible, setVisible] = useState(initialState);
  const onDismiss = () => {
    setVisible(false)
    window.localStorage.setItem(lsVarName, true); // notification dimiss!
  };

  return (
      <Alert color="primary" className="alert-with-icon" isOpen={visible} toggle={onDismiss}>
        <span className="tim-icons icon-bell-55" data-notify="icon" />
        Los datos que se muestran corresponden al día 28/07/2020 publicados aproximadamente a las 10:30pm en agetic.gob.bo, desde esa fecha no se actualizaron los datos necesarios para el procesamiento de nuestra información, por ende estamos a la espera de la actualización de los datos su API. De momento pueden consultar los datos publicados el dia de ayer 29/07/2020 en <a href="https://www.boliviasegura.gob.bo/" target="_blank">boliviasegura.gob.bo</a>. En cuanto tengamos la actualización de los datos que necesitamos para nuestro procesamiento, se publicarán automaticamente.
      </Alert>
  )
}

export default BoliviaNotfication
