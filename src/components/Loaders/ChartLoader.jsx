
import React from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

export default function ChartLoader () {

  return (
    <Card>
      <CardHeader>
      <h5>
        <Skeleton circle={true} count={1}  width="15%" />
      </h5>
      <h3>
        <Skeleton circle={true} count={1}  width="35%" />
      </h3>
      </CardHeader>
      <CardBody>
        <h4><Skeleton circle={true} width="48%" /></h4>
        <h4><Skeleton circle={true} width="82%" /></h4>
        <h4><Skeleton circle={true} width="64%" /></h4>
        <h4><Skeleton circle={true} width="43%" /></h4>
        <h4><Skeleton circle={true} width="78%" /></h4>
        <h4><Skeleton circle={true} width="34%" /></h4>
        <h4><Skeleton circle={true} width="55%" /></h4>
      </CardBody>
    </Card>
  )
}