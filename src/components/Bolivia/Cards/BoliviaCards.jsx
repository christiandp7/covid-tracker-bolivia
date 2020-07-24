import React from 'react'
import CardLoader from '../../Loaders/CardsLoaderBo'
import CountUp from 'react-countup'

import {
  sumBOStatus
} from '../../../variables/math'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
} from "reactstrap";


function BoliviaCards({ deps, data: { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, active }}) {

  if(!cases) {
    return ( <CardLoader /> )
  }

  return (
    <Row>
            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Confirmados</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-info" /> <CountUp start={0} end={sumBOStatus(deps, 'total', 'cases')} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={sumBOStatus(deps, 'today', 'cases')} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Activos</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-warning" /> <CountUp start={0} end={active} duration={2} separator="." />
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
                    <i className="tim-icons icon-single-02 text-success" /> <CountUp start={0} end={sumBOStatus(deps, 'total', 'recovered')} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={sumBOStatus(deps, 'today', 'recovered')} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Decesos</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-danger" /> <CountUp start={0} end={sumBOStatus(deps, 'total', 'deaths')} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={sumBOStatus(deps, 'today', 'deaths')} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
          </Row>
  )
}

export default BoliviaCards
