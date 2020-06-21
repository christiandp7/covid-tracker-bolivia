import React from 'react'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";

function BoliviaCardsData({ data: { lethalityPercent, recoveredPercent }}) {
  if(!lethalityPercent) {
    return (<h4>Loading</h4>)
  }
  return (
    <>
      <Card>
        <CardHeader>
          <h4>Tasa de Mortalidad</h4>
          <CardTitle tag="h2">
            <i className="tim-icons icon-alert-circle-exc text-danger" /> 2.9%
          </CardTitle>
        </CardHeader>
        <CardBody>
          
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h4>Tasa de Recuperacion</h4>
          <CardTitle tag="h2">
            <i className="tim-icons icon-satisfied text-success" /> 20,5%
          </CardTitle>
        </CardHeader>
        <CardBody>
          
        </CardBody>
      </Card>  
    </>
  )
}

export default BoliviaCardsData
