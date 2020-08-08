import React from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from 'reactstrap'

import PhaseDoughnutDataset from './PhaseDoughnutDataset'

import ChartLoader from '../../Loaders/ChartLoader'

function PhaseDoughnut({ data: { phases, totalCandidates } }) {
  
  if(!phases) {
    return ( <ChartLoader /> )
  }

  //console.log(data)

  return (
    <Card className="card-chart sm-chart">
      <CardHeader>
        <CardTitle tag="h3">
          <i className={`tim-icons icon-chart-pie-36`} /> Fases de Prueba y Desarrollo
        </CardTitle>
      </CardHeader>
      <CardBody>
      <div className="divider"></div>
      <div className="chart-area">
          <PhaseDoughnutDataset
            phases={phases}
          />
      </div>
      </CardBody>
    </Card>
  )
}

export default PhaseDoughnut
