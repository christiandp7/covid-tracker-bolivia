
import React from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
} from "reactstrap";

export default function CardLoader () {

  return (
    <Row>
      <Col xs="12" md="3">
        <Card>
          <CardHeader>
          <h4><Skeleton circle={true} count={1}  width="60%" /></h4>
          <CardTitle tag="h2"><Skeleton circle={true} count={1}  width="85%" /></CardTitle>
          <h5><Skeleton circle={true} count={1}  width="35%" /></h5>
          </CardHeader>
        </Card>
      </Col>
      <Col xs="12" md="3">
        <Card>
          <CardHeader>
          <h4><Skeleton count={1}  width="70%" /></h4>
          <CardTitle tag="h2"><Skeleton count={1}  width="75%" /></CardTitle>
          <h5><Skeleton count={1}  width="42%" /></h5>
          </CardHeader>
        </Card>
      </Col>
      <Col xs="12" md="3">
        <Card>
          <CardHeader>
          <h4><Skeleton circle={true} count={1}  width="80%" /></h4>
          <CardTitle tag="h2"><Skeleton circle={true} count={1}  width="60%" /></CardTitle>
          <h5><Skeleton circle={true} count={1}  width="27%" /></h5>
          </CardHeader>
        </Card>
      </Col>
      <Col xs="12" md="3">
        <Card>
          <CardHeader>
          <h4><Skeleton circle={true} count={1}  width="75%" /></h4>
          <CardTitle tag="h2"><Skeleton circle={true} count={1}  width="30%" /></CardTitle>
          <h5><Skeleton circle={true} count={1}  width="38%" /></h5>
          </CardHeader>
        </Card>
      </Col>
    </Row>

  )
}