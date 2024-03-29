import React, { Component } from 'react'

import { SkeletonTheme } from "react-loading-skeleton";
import { Link } from 'react-router-dom'

import {
  fetchBOGeneralData,
  //fetchCountriesHistoryData,
  fetchDepartmentsLastUpdate,
  fetchDepartmentsStatus
} from '../api'

import {
  BoliviaCards,
  BoliviaCardsData,
  BoliviaMap,
  //BoliviaChart,
  DepartmentsChart,
  DepartmentsBar,
  BoliviaTestsPie,
  DepartmentsTable
} from "../components/Bolivia"

// reactstrap components
import {
  Alert,
  Card,
  Row,
  Col
} from "reactstrap";

//import BoliviaNotification from '../components/Notifications/BoliviaNotfication'

export class Bolivia extends Component {

  state = {
    genData: {},
    depLastUpdate: [],
    depStatus: [],
    //historyData: [],
  }

  async componentDidMount() {

    const fetchedGenData = await fetchBOGeneralData();
    //const fetchedHistory = await fetchCountriesHistoryData('Bolivia');
    const fetchedDepLastUpdate = await fetchDepartmentsLastUpdate();
    const fetchedDepStatus = await fetchDepartmentsStatus();
    //setTimeout(() => {
    this.setState({
      genData: fetchedGenData,
      depLastUpdate: fetchedDepLastUpdate,
      depStatus: fetchedDepStatus,
      //historyData: fetchedHistory
    })
    //}, 50000);
    //console.log(genData)
  }



  render() {
    //const { genData } = this.state;

    return (
      <>
        <div className="content">
          <SkeletonTheme color="#1e1e2f" highlightColor="#BFBFC5">

            {/*<BoliviaNotification />*/}

            <Alert color="danger" className="alert-with-icon">
              <span className="tim-icons icon-bell-55" data-notify="icon" />
              La fuente de datos dejó de actualizarse regularmente desde Octubre de 2020 y se interrumpió completamente el 23/11/2020. Por lo tanto, los datos departamentales están desactualizados. Puede consultar los datos de Bolivia en <Link to="/sudamerica">Sudamérica.</Link>
            </Alert>

            <BoliviaCards data={this.state.genData} />

            <Row>
              <Col xs="12" md="6">
                <Card>
                  <BoliviaMap data={this.state.depLastUpdate} />
                </Card>
              </Col>
              <Col xs="12" md="6">
                <BoliviaCardsData data={this.state.genData} />
              </Col>
            </Row>


            {/*<Row>
            <Col xs="12">
              <BoliviaChart data={this.state.historyData} />
            </Col>
          </Row>*/}

            <Row>
              <Col xs="12">
                <DepartmentsChart timeline={this.state.depStatus} data={this.state.depLastUpdate} />
              </Col>
            </Row>

            <Row>
              <Col md="8" sm="12">
                <DepartmentsBar data={this.state.depLastUpdate} />
              </Col>
              <Col md="4" sm="12">
                <BoliviaTestsPie data={this.state.genData} />
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <DepartmentsTable data={this.state.depLastUpdate} />
              </Col>
            </Row>

          </SkeletonTheme>
        </div>
      </>
    )
  }
}

export default Bolivia
