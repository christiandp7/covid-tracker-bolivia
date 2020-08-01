import React from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";

export default function PieLoader () {

  return (
    <Card>
      <CardHeader>
      <p><Skeleton circle={true} count={1}  width="60%" /></p>
      <CardTitle tag="h3">
        <Skeleton circle={true} count={1}  width="37%" />
      </CardTitle>
      </CardHeader>
      <CardBody>
      <p className="text-center"><Skeleton circle={true} count={1}  width="55%" /></p>
        <div className="pie_loader_container">
          <Skeleton className="map_loader_ske" circle={true} width={212} height={212} />
        </div>
        <h5 className="text-center"><Skeleton circle={true} count={1}  width="28%" /> &nbsp; &nbsp; &nbsp; <Skeleton circle={true} count={1}  width="28%" /> </h5>
      </CardBody>
    </Card>
  )
}