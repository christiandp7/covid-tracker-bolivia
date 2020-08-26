import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'

import {
  FormGroup,
  Input,
  Label,
  Badge,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table
} from 'reactstrap'

import ChartLoader from '../../Loaders/ChartLoader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSyringe
} from '@fortawesome/free-solid-svg-icons'

import { vaccinePhaseText } from '../../../helpers'
import { vaccinePhasesData } from '../../../data/vaccineData'

function CandidatesTable({ data: { data, phases, source, totalCandidates } }) {

  const [vaccines, setVaccines] = useState([]);
  const [vaccinePhase, setVaccinePhase] = useState('all');
  

  const addID = (data) => {
    const newVaccines = data.map((vacc, i) => {
      let id = { 'id': i }
      return Object.assign(vacc, id)
    })
    return newVaccines
  }

  const filterCandByPhase = (data) => {
    if(vaccinePhase === 'all'){
      return data;
    }
    return data.filter(obj => {
      return obj.trialPhase === vaccinePhase;
    })
  }

  /*useEffect(() => {
    if(data){
      //setTableRows(renderTable(filterCandByPhase()))
    }
  }, [vaccinePhase])*/

  const assignColorToPhase = (phases, cellPhase) => {
    let phasesWColors = phases.map((phase, i) => {
      return {
        phase: phase.phase,
        color: vaccinePhasesData.hexColors[i]
      }
    })
    return phasesWColors.find(pha => pha.phase === cellPhase)
  }


  const listColFormater = (cell, row) => {
    //console.log(cell)
    if(cell[0] === "") {
      return "-"
    }
    return (<ul style={{ paddingInlineStart: '10px' }}>
      {cell.map((el, i) => {
        return (<li key={i}>{el}</li>)
      })}
    </ul>)
    //return cell;
  }

  /*const phaseColFormater = (cell, row) => {
    console.log(cell)
    console.log(assignColorToPhase(phases))
    if(cell === "Phase 3") {
      return (<Badge style={{ backgroundColor: '#00d6b4' }}>{ cell }</Badge>)
    }
    if(cell === "Phase 2/3") {
      return (<Badge style={{ backgroundColor: '#ffd600' }}>{ cell }</Badge>)
    }
    if(cell === "Phase 2b") {
      return (<Badge style={{ backgroundColor: '#8965e0' }}>{ cell }</Badge>)
    }
    if(cell === "Phase 2") {
      return (<Badge style={{ backgroundColor: '#11cdef' }}>{ cell }</Badge>)
    }
    if(cell === "Phase 1/2") {
      return (<Badge style={{ backgroundColor: '#e14eca' }}>{ cell }</Badge>)
    }
    if(cell === "Phase 1") {
      return (<Badge style={{ backgroundColor: '#fb6340' }}>{ cell }</Badge>)
    }
    if(cell === "Pre-clinical") {
      return (<Badge style={{ backgroundColor: '#1d8cf8' }}>{ cell }</Badge>)
    }
    
    //Early Research
    return (<Badge style={{ backgroundColor: '#f5365c' }}>{ cell }</Badge>)
    
  }*/


  const phaseColFormater = (cell, row) => {
    //console.log(cell)
    //console.log(assignColorToPhase(phases, cell))
    let phaseColors = assignColorToPhase(phases, cell)
    return (<Badge style={{ backgroundColor: phaseColors.color }}>{ vaccinePhaseText(cell) }</Badge>)
  }

  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange
  }) => (
    <>
    <UncontrolledButtonDropdown>
      <DropdownToggle caret data-toggle="dropdown" color="primary">
        {currSizePerPage}
      </DropdownToggle>
      <DropdownMenu>
        { options.map((option) => {
          return (
            <DropdownItem
              key={option.text}
              href="#"
              onClick={ (e) => { e.preventDefault(); onSizePerPageChange(option.page) }}
            >
              Mostrar {option.text}
            </DropdownItem>
          )
        })}
      </DropdownMenu>
    </UncontrolledButtonDropdown>
    </>
  );


  const columns = [
    { dataField: 'id', text: 'ID', hidden: true, align: 'left' },
    { dataField: 'candidate', text: 'Candidatos', align: 'left' }, 
    { dataField: 'sponsors', text: 'Patrocinadores', align: 'left', formatter: listColFormater, style: { verticalAlign: 'top' } }, 
    { dataField: 'trialPhase', text: 'Fase de Prueba', align: 'left', formatter: phaseColFormater },
    { dataField: 'institutions', text: 'Instituciones', align: 'left', formatter: listColFormater, style: { verticalAlign: 'top' } },
    { dataField: 'funding', text: 'Financiamiento', align: 'left', formatter: listColFormater, style: { verticalAlign: 'top' } },
  ];


  if(!data){
    return ( <ChartLoader /> )
  }

  return (
    <Card>
      <CardHeader>
        <Row>
          <Col className="text-left" sm="8" xs="12">
            <h5>
              Total Candidatos: {totalCandidates} | 
              Fuente:  <a target="_blank" href={source}>raps.org</a>
            </h5>
            <CardTitle tag="h2"><small><FontAwesomeIcon icon={faSyringe} /></small> Candidatos</CardTitle>
          </Col>
          <Col sm="4" xs="12">
            <FormGroup className="float-sm-right">
              <Label for="VaccinePhaseSelect">Fase de Prueba</Label>
              <Input 
                type="select" 
                id="VaccinePhaseSelect" 
                defaultValue={vaccinePhase}
                className="width-auto"
                //onChange={(e) => filterCandByPhase(e.target.value)}
                onChange={(e) => setVaccinePhase(e.target.value)}
              >
                {phases.map((phase, i) => {
                  return (
                  <option key={i} value={phase.phase}>{vaccinePhaseText(phase.phase)}</option>
                  )
                })}
                <option value="all">Todas</option>
                {/*<option value="Phase 3">Fase 3</option>
                <option value="Phase 2/3">Fase 2/3</option>
                <option value="Phase 2">Fase 2</option>
                <option value="Phase 1/2">Fase 1/2</option>
                <option value="Phase 1">Fase 1</option>
                <option value="Pre-clinical">Pre-Clinica</option>
              <option value="Early research">Investigación temprana</option>*/}
              </Input> 
            </FormGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>

          <BootstrapTable 
            bootstrap4
            wrapperClasses="table-responsive"
            classes="tablesorter" 
            keyField="id" 
            data={ addID(filterCandByPhase(data)) } 
            columns={ columns } 
            pagination={ paginationFactory({
              className: "pagination-lg",
              sizePerPageRenderer
            }) }
            bordered={ false }
          />


      </CardBody>
    </Card>
  )
}

export default CandidatesTable
