import React from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Progress
} from "reactstrap";


function BoliviaCards({ data: { confirmed, recovered, deaths, actives, lastUpdate }}) {

  if(!confirmed) {
    return ( <h4>Loading</h4> )
  }

  return (
    <Row>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <h4>Total Infectados</h4>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-single-02 text-info" /> {confirmed.value}
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
                    <i className="tim-icons icon-single-02 text-warning" /> {actives}
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
                    <i className="tim-icons icon-single-02 text-success" /> {recovered.value}
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
                    <i className="tim-icons icon-single-02 text-danger" /> {deaths.value}
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
