import React from 'react'
import CardLoader from '../../Loaders/CardsLoaderBo'
import CountUp from 'react-countup'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
} from "reactstrap";


function BoliviaCards({ data: { cases, deaths, recovered, active, todayCases, todayDeaths, todayRecovered } }) {

  if(!cases) {
    return ( <CardLoader /> )
  }

  

  return (
    <Row>
            <Col xs="12" sm="6" md="3">
              <Card className="card-status">
                <CardHeader>
                  <h4>Total Confirmados</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-info" /> <CountUp start={0} end={cases} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={todayCases} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card className="card-status">
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
              <Card className="card-status">
                <CardHeader>
                  <h4>Total Recuperados</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-success" /> <CountUp start={0} end={recovered} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={todayRecovered} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card className="card-status">
                <CardHeader>
                  <h4>Total Decesos</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-danger" /> <CountUp start={0} end={deaths} duration={2} separator="." />
                  </CardTitle>
                  <h5>Hoy: <CountUp start={0} end={todayDeaths} duration={2} separator="." /></h5>
                </CardHeader>
              </Card>
            </Col>
          </Row>
  )
}

export default BoliviaCards
