import React from 'react'
import CardLoader from '../../Loaders/CardsDataLoaderBo'
import CountUp from 'react-countup'

import { numberWithDots } from '../../../variables/math'

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
  //faProcedures,
  faMicroscope,
  faHandHoldingMedical,
  faUser,
  faUserCheck,
  faUserTimes,
  faUserTag,
  faPeopleArrows
} from '@fortawesome/free-solid-svg-icons'

function SudCardData({ data: { cases, active, deaths, recovered, tests, lethalityPercent, recoveredPercent, incidenceRate } }) {
  if(!cases) {
    return (<CardLoader />)
  }
  return (
    <>
    
      <Card>
        <CardHeader>
          <CardTitle className="text-center" tag="h3">
            Datos Generales
          </CardTitle>
        </CardHeader>
        <CardBody>

        <Row>
          <Col xs="6" md="6">
            <h5>Total Confirmados</h5>
            <h4>
              <FontAwesomeIcon className="text-info" icon={faUser} /> <CountUp start={0} end={cases} duration={2} separator="." />
            </h4>

            <h5>Total Recuperados</h5>
            <h4>
            <FontAwesomeIcon className="text-success" icon={faUserCheck} /> <CountUp start={0} end={recovered} duration={2} separator="." />
            </h4>
            
           
          </Col>
          <Col xs="6" md="6">
            <h5>Total Activos</h5>
            <h4>
            <FontAwesomeIcon className="text-warning" icon={faUserTag} /> <CountUp start={0} end={active} duration={2} separator="." />
            </h4>

            <h5>Total Decesos</h5>
            <h4>
            <FontAwesomeIcon className="text-danger" icon={faUserTimes} /> <CountUp start={0} end={deaths} duration={2} separator="." />
            </h4>

            
            
          </Col>
          <Col xs="12">

          </Col>
        </Row>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-center" tag="h3">
            Datos Estadísticos
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="6" md="6">
              <h5>Tasa de Letalidad</h5>
              <h4>
                <FontAwesomeIcon className="text-danger" icon={faSkullCrossbones} /> { lethalityPercent }%
              </h4>
              <h5>Tasa de Incidencia</h5>
              <h4>
                <FontAwesomeIcon className="text-purple" icon={faPeopleArrows} /> { incidenceRate }<span className="ext">/100mil hab.</span>
              </h4>
            </Col>
            <Col xs="6" md="6">
            <h5>Tasa de Recuperación</h5>
            <h4>
              <FontAwesomeIcon className="text-success" icon={faHandHoldingMedical} /> { recoveredPercent }%
            </h4>
              <h5>Nro. Tests</h5>
              <h4>
                <FontAwesomeIcon className="text-info" icon={faMicroscope} /> { numberWithDots(tests) }
              </h4>
            </Col>
          </Row>
        </CardBody>  
      </Card>
    </>
  )
}

export default SudCardData
