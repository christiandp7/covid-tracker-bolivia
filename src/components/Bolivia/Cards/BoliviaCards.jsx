import React from 'react'
import CardLoader from '../../Loaders/CardsLoaderBo'
import CountUp from 'react-countup'

import {
  sumBOStatus,
  getActiveValue
} from '../../../variables/math'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
} from "reactstrap";


function BoliviaCards({ deps }) {

  if(!deps[0]) {
    return ( <CardLoader /> )
  }

  // Total
  let casesSum = sumBOStatus(deps, 'total', 'cases')
  let deathsSum = sumBOStatus(deps, 'total', 'deaths')
  let recoveredSum = sumBOStatus(deps, 'total', 'recovered')

  // today
  let todayCasesSum = sumBOStatus(deps, 'today', 'cases')
  let todayDeathsSum = sumBOStatus(deps, 'today', 'deaths')
  let todayRecoveredSum = sumBOStatus(deps, 'today', 'recovered')

  // Active
  let activeSum = getActiveValue(casesSum,deathsSum,recoveredSum)
  

  return (
    <Row>
            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Confirmados</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-info" /> <CountUp start={0} end={casesSum} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={todayCasesSum} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Activos</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-warning" /> <CountUp start={0} end={activeSum} duration={2} separator="." />
                  </CardTitle>
                  <h5> &nbsp; </h5>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Recuperados</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-success" /> <CountUp start={0} end={recoveredSum} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={todayRecoveredSum} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Decesos</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-danger" /> <CountUp start={0} end={deathsSum} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={todayDeathsSum} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
          </Row>
  )
}

export default BoliviaCards
