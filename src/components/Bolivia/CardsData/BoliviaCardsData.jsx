import React from 'react'
import { Line, Bar } from "react-chartjs-2";
import CardLoader from '../../Loaders/CardsDataLoaderBo'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSkullCrossbones,
  faExclamationTriangle,
  faProcedures,
  faMicroscope,
  faHandHoldingMedical,
  faLungsVirus
} from '@fortawesome/free-solid-svg-icons'


import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

function BoliviaCardsData({ data: { critical, tests, lethalityPercent, recoveredPercent }}) {
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
          <Col xs="12" md="6">
            <h5>Tasa de Mortalidad</h5>
            <h3><FontAwesomeIcon className="text-danger" icon={faSkullCrossbones} /> { lethalityPercent }%</h3>
            
            <h5>Estado Critico</h5>
            <h3><FontAwesomeIcon className="text-warning" icon={faProcedures} /> { critical } </h3>
          </Col>
          <Col xs="12" md="6">
            <h5>Tasa de Recuperacion</h5>
            <h3><FontAwesomeIcon className="text-success" icon={faHandHoldingMedical} /> { recoveredPercent }%</h3>
            
            <h5>Nro. Tests</h5>
            <h3><FontAwesomeIcon className="text-info" icon={faMicroscope} /> { tests }</h3>
          </Col>
          <Col xs="12">
            <div className="chart-area">
              <Bar
                data={chartExample3.data}
                options={chartExample3.options}
              />
            </div>
          </Col>
        </Row>

        </CardBody>
      </Card>
      
      
    </>
  )
}

export default BoliviaCardsData
