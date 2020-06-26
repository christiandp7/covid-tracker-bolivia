
import React from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "reactstrap";

export default function CardLoader () {

  return (
    <Row>
      <Col xs="12" md="3">
        <Card>
          <CardHeader>
          <h4><Skeleton circle={true} count={1}  width="60%" /></h4>
          <h3><Skeleton circle={true} count={1}  width="85%" /></h3>
          </CardHeader>
        </Card>
      </Col>
      <Col xs="12" md="3">
        <Card>
          <CardHeader>
          <h4><Skeleton circle={true} count={1}  width="70%" /></h4>
          <h3><Skeleton circle={true} count={1}  width="75%" /></h3>
          </CardHeader>
        </Card>
      </Col>
      <Col xs="12" md="3">
        <Card>
          <CardHeader>
          <h4><Skeleton circle={true} count={1}  width="80%" /></h4>
          <h3><Skeleton circle={true} count={1}  width="60%" /></h3>
          </CardHeader>
        </Card>
      </Col>
      <Col xs="12" md="3">
        <Card>
          <CardHeader>
          <h4><Skeleton circle={true} count={1}  width="75%" /></h4>
          <h3><Skeleton circle={true} count={1}  width="30%" /></h3>
          </CardHeader>
        </Card>
      </Col>
    </Row>

  )
}