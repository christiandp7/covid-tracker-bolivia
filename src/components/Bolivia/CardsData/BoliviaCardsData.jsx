import React from 'react'
import { Bar } from "react-chartjs-2";
import CardLoader from '../../Loaders/CardsDataLoaderBo'

import { numberWithCommas } from '../../../variables/math'

import {
  Alert,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSkull,
  faExclamationTriangle,
  faSkullCrossbones,
  faProcedures,
  faMicroscope,
  faHandHoldingMedical,
  faViruses,
  faPeopleArrows
} from '@fortawesome/free-solid-svg-icons'


import { chartExample3 } from "variables/charts.js";

function BoliviaCardsData({ data: { tests, lethalityPercent, recoveredPercent, mortalityRate, effectiveLethalityRate, incidenceRate }}) {
  if(!lethalityPercent) {
    return (<CardLoader />)
  }
  return (
    <>
    
      <Card>
        <CardHeader>
          <CardTitle className="text-center" tag="h3">
            Datos Estadísticos
          </CardTitle>
        </CardHeader>
        <CardBody>

        <Row>
          <Col xs="12" sm="6" md="6">
            <h5>Tasa de Letalidad</h5>
            <h3><FontAwesomeIcon className="text-danger" icon={faSkullCrossbones} /> { lethalityPercent }%</h3>
            
            <h5>Tasa de Mortalidad</h5>
            <h3>
              <FontAwesomeIcon className="text-warning" icon={faExclamationTriangle} /> { mortalityRate }<span>/100mil hab.</span>
            </h3>

            <h5>Nro. Tests</h5>
            <h3><FontAwesomeIcon className="text-info" icon={faMicroscope} /> { numberWithCommas(tests) }</h3>
          </Col>
          <Col xs="12" sm="6" md="6">
            <h5>Tasa de Recuperación</h5>
            <h3><FontAwesomeIcon className="text-success" icon={faHandHoldingMedical} /> { recoveredPercent }%</h3>
            
            <h5>T. de Letalidad Efectiva</h5>
            <h3>
              <FontAwesomeIcon className="text-tertiary" icon={faSkull} /> { effectiveLethalityRate }%
            </h3>

            <h5>Tasa de Incidencia</h5>
            <h3><FontAwesomeIcon className="text-purple" icon={faPeopleArrows} /> { numberWithCommas(incidenceRate) }<span>/100mil hab.</span> </h3>
          </Col>
          {/*<Col xs="12">
            <div className="chart-area">
              <Bar
                data={chartExample3.data}
                options={chartExample3.options}
              />
            </div>
  </Col>*/}

          <Col xs="12">
            <p style={{marginBottom: '9px'}}><strong>Nota:</strong> Los datos de <b>Nro. de Test</b> no se actualizan diariamente, en ocasiones tardan semanas.</p>
          </Col>
          

        </Row>

        </CardBody>
      </Card>
      
      
    </>
  )
}

export default BoliviaCardsData
