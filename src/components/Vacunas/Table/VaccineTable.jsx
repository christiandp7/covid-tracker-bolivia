import React, { useState, useEffect } from 'react'

import {
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table
} from 'reactstrap'

import ChartLoader from '../../Loaders/ChartLoader'

function VaccineTable({ data: { data, source, totalCandidates } }) {

  //const [candidates, setCandidates] = useState([]);
  const [tableRows, setTableRows] = useState(null);
  const [vaccinePhase, setVaccinePhase] = useState('all');

  const filterCandByPhase = () => {
    //setVaccinePhase(phase)
    if(vaccinePhase === 'all'){
      return data;
    }
    return data.filter(obj => {
      return obj.trialPhase === vaccinePhase;
    })
  //console.log(candidates)
  }

  const renderTable = (dataArray) => {
    //if(data['data']) {
      return dataArray.map((candidate, i) => (
        <tr key={i}>
          <td>{ candidate.candidate }</td>
          <td>{ candidate.sponsors }</td>
          <td>{ candidate.trialPhase }</td>
          <td>{ candidate.institutions }</td>
          <td>{ candidate.funding }</td>
        </tr>
      ))
    //}
  }


  useEffect(() => {
    if(data){
      setTableRows(renderTable(filterCandByPhase()))
    }
  }, [vaccinePhase])


  if(!data){
    return ( <ChartLoader /> )
  }
  return (
    <Card>
      <CardHeader>
        <Row>
          <Col className="text-left" xs="12">
            <h5>
            Total Candidatos: {totalCandidates} | 
            Fuente:  <a target="_blank" rel="noopener noreferrer" href={source}>raps.org</a>
          </h5>
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12">
            <CardTitle tag="h2">Candidatos</CardTitle>
          </Col>
          <Col md="6" sm="12">
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
                  <option value="all">Todas</option>
                  <option value="Phase 3">Fase 3</option>
                  <option value="Phase 2/3">Fase 2/3</option>
                  <option value="Phase 2">Fase 2</option>
                  <option value="Phase 1/2">Fase 1/2</option>
                  <option value="Phase 1">Fase 1</option>
                  <option value="Pre-clinical">Pre-Clinica</option>
                  <option value="Early research">Investigación temprana</option>
                </Input> 
              </FormGroup>
          </Col>
        </Row>
        
      </CardHeader>
      <CardBody>
        <Table className="tablesorter" responsive>
          <thead className="text-primary">
            <tr>
              <th>Candidatos</th>
              <th>Patrocinadores</th>
              <th>Fase de Prueba</th>
              <th>Institución</th>
              <th>Financiamiento</th>
            </tr>
          </thead>
          <tbody>

            {
              //renderTable(data)
              tableRows === null ? data.map((candidate, i) => (
                <tr key={i}>
                  <td>{ candidate.candidate }</td>
                  <td>{ candidate.sponsors }</td>
                  <td>{ candidate.trialPhase }</td>
                  <td>{ candidate.institutions }</td>
                  <td>{ candidate.funding }</td>
                </tr>
              )) :
              tableRows
            }
            
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default VaccineTable