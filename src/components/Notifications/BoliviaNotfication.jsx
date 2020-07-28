import React, { useState } from 'react'

import {
  Alert
} from 'reactstrap'

function BoliviaNotfication() {

  let lsVarName = 'bol-err-notification-1';

  const initialState = () => window.localStorage.getItem(lsVarName) === null ? true : false

  const [visible, setVisible] = useState(initialState);
  const onDismiss = () => {
    setVisible(false)
    window.localStorage.setItem(lsVarName, true); // notification dimiss!
  };

  return (
      <Alert color="danger" className="alert-with-icon" isOpen={visible} toggle={onDismiss}>
        <span className="tim-icons icon-bell-55" data-notify="icon" />
        Ayer experimentamos inconvenientes en nuestro servidor que ocasionaron una toma errónea de los datos, lo solucionamos durante el día de hoy y corregímos los datos erróneos. Estamos trabajando constantemente para brindarle el mejor servicio y los datos mas actualizados.
      </Alert>
  )
}

export default BoliviaNotfication
