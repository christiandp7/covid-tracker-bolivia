import React, { Component } from 'react'

import { SkeletonTheme } from "react-loading-skeleton";

import {
  Row,
  Col
} from "reactstrap";

import { PhaseDoughnut, CandidatesTable } from '../components/Vacunas'

import { fetchVaccine } from '../api/index.js'

import vaccineDevImg from '../assets/img/vaccine-dev.png'

export class Vacunas extends Component {

  state = {
    vaccineData: {}
  }

  async componentDidMount() {
    const fetchedVaccineData = await fetchVaccine();
    //console.log(fetchedVaccineData)
    //setTimeout(() => {
      this.setState({
        vaccineData: fetchedVaccineData
      })
    //}, 5000);
  }



  render() {
    return (
      <>
      <div className="content">
      <SkeletonTheme color="#1e1e2f" highlightColor="#BFBFC5">

        <Row>
          <Col xs="12" md="7" sm="12" xs="12">
            <PhaseDoughnut data={this.state.vaccineData} />
          </Col>
          <Col xs="12" md="5" sm="12" xs="12" className="text-center">
            {/*<h3 className="mb-0">Vacunas en Desarrollo</h3>*/}
            <img className="vaccine-dev-img d-none d-sm-none d-md-inline" src={vaccineDevImg} />
          </Col>
        </Row>

        {/*<Row>
          <Col xs="12">
            <VaccineTable data={this.state.vaccineData} />
          </Col>
        </Row>*/}

        <Row>
          <Col xs="12">
            <CandidatesTable data={this.state.vaccineData} />
          </Col>
        </Row>

        

      </SkeletonTheme>
      </div>
      </>
    )
  }
}

export default Vacunas
