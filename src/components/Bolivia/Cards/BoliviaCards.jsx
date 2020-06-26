import React from 'react'
import CardLoader from '../../Loaders/CardsLoaderBo'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Progress
} from "reactstrap";


function BoliviaCards({ data: { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, active }}) {

  if(!cases) {
    return ( <CardLoader /> )
  }

  return (
    <Row>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Infectados</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-info" /> {cases}
                  </CardTitle>
                </CardHeader>
                <CardBody>

                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Activos</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-warning" /> {active}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Recuperados</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-success" /> {recovered}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Decesos</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-danger" /> {deaths}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
  )
}

export default BoliviaCards
