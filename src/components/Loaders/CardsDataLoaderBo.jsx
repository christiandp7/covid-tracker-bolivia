
import React from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

export default function CardLoader () {

  return (
    <Card>
      <CardHeader>
      <h3 className="text-center">
        <Skeleton circle={true} count={1}  width="40%" />
      </h3>
      </CardHeader>
      <CardBody>
        <h4><Skeleton circle={true} width="40%" /></h4>
        <h4><Skeleton circle={true} width="70%" /></h4>
        <h4><Skeleton circle={true} width="60%" /></h4>
        <h4><Skeleton circle={true} width="35%" /></h4>
        <h4><Skeleton circle={true} width="43%" /></h4>
        <h4><Skeleton circle={true} width="78%" /></h4>
        <h4><Skeleton circle={true} width="57%" /></h4>
      </CardBody>
    </Card>
  )
}