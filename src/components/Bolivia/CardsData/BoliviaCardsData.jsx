import React from 'react'
//import { Bar } from "react-chartjs-2";
import CardLoader from '../../Loaders/CardsDataLoaderBo'

import { numberWithDots } from '../../../variables/math'

import {
 // Alert,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSkull,
  faExclamationTriangle,
  faSkullCrossbones,
 // faProcedures,
  faMicroscope,
  faHandHoldingMedical,
 // faViruses,
  faPeopleArrows
} from '@fortawesome/free-solid-svg-icons'

import {
  TooltipTL,
  TooltipTM,
  TooltipTR,
  TooltipTLE,
  TooltipTI,
  TooltipTests
} from '../../Tooltip/dataTooltips'


//import { chartExample3 } from "variables/charts.js";
//import { TooltipTLE } from 'components/Tooltip/dataTooltips';

function BoliviaCardsData({ data: { tests, lethalityRate, recoveredRate, mortalityRate, effectiveLethalityRate, incidenceRate }}) {
  if(!lethalityRate) {
    return (<CardLoader />)
  }
  return (
    <>
    
      <Card>
        <CardHeader>
          <CardTitle className="text-center" tag="h3">
            Datos Estadísticos
          </CardTitle>
        </CardHeader>
        <CardBody>

        <Row>
          <Col xs="12" sm="6" md="6">
            <h5>Tasa de Letalidad <i className="tim-icons icon-alert-circle-exc" id="tooltipTL"></i></h5>
            <h3><FontAwesomeIcon className="text-danger" icon={faSkullCrossbones} /> { lethalityRate }%</h3>
            
            <h5>Tasa de Mortalidad <i className="tim-icons icon-alert-circle-exc" id="tooltipTM"></i></h5>
            <h3>
              <FontAwesomeIcon className="text-warning" icon={faExclamationTriangle} /> { mortalityRate }<span>/100mil hab.</span>
            </h3>

            <h5>Nro. Tests <i className="tim-icons icon-alert-circle-exc" id="tooltipTests"></i></h5>
            <h3><FontAwesomeIcon className="text-info" icon={faMicroscope} /> { numberWithDots(tests) }</h3>
          </Col>
          <Col xs="12" sm="6" md="6">
            <h5>Tasa de Recuperación <i className="tim-icons icon-alert-circle-exc" id="tooltipTR"></i></h5>
            <h3><FontAwesomeIcon className="text-success" icon={faHandHoldingMedical} /> { recoveredRate }%</h3>
            
            <h5>T. de Letalidad Efectiva <i className="tim-icons icon-alert-circle-exc" id="tooltipTLE"></i> </h5>
            <h3>
              <FontAwesomeIcon className="text-tertiary" icon={faSkull} /> { effectiveLethalityRate }%
            </h3>

            <h5>Tasa de Incidencia <i className="tim-icons icon-alert-circle-exc" id="tooltipTI"></i></h5>
            <h3><FontAwesomeIcon className="text-purple" icon={faPeopleArrows} /> { incidenceRate }<span>/100mil hab.</span> </h3>
          </Col>
          {/*<Col xs="12">
            <div className="chart-area">
              <Bar
                data={chartExample3.data}
                options={chartExample3.options}
              />
            </div>
  </Col>*/}

          <Col xs="12">
            <p style={{marginBottom: '9px'}}><strong>Nota:</strong> Los datos de <b>Nro. de Test</b> no se actualizan diariamente, en ocasiones tardan semanas.</p>
          </Col>
          

        </Row>

        </CardBody>
      </Card>
      

      {/* Tooltips */}
      <TooltipTL />
      <TooltipTR />
      <TooltipTM />
      <TooltipTLE />
      <TooltipTI />
      <TooltipTests />
      
    </>
  )
}

export default BoliviaCardsData
