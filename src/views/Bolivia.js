import React, { Component } from 'react'

import { SkeletonTheme } from "react-loading-skeleton";

import { 
  fetchBOGeneralData,
  fetchCountriesHistoryData,
  fetchDepartmentsLastUpdate 
} from '../api'

import { BoliviaCards, BoliviaCardsData, BoliviaMap, BoliviaChart } from "../components/Bolivia"

// reactstrap components
import {
  Card,
  Row,
  Col
} from "reactstrap";


export class Bolivia extends Component {

  state = {
    genData: {},
    depLastUpdate : {},
    historyData: [],
  }

  async componentDidMount() {
  
    const fetchedGenData = await fetchBOGeneralData();
    const fetchedHistory = await fetchCountriesHistoryData('Bolivia');
    const fetchedDepLastUpdate = await fetchDepartmentsLastUpdate();
  //setTimeout(() => {
    this.setState({ 
      genData: fetchedGenData ,
      depLastUpdate: fetchedDepLastUpdate,
      historyData: fetchedHistory
    })
  //}, 5000);
    //console.log(genData)
  }

  

  

  render() {
    //const { genData } = this.state;
    
    return (
      <>
        <div className="content">
        <SkeletonTheme color="#1e1e2f" highlightColor="#BFBFC5">

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


          <Row>
            <Col xs="12">
              <BoliviaChart data={this.state.historyData} />
            </Col>
          </Row>


        </SkeletonTheme>
        </div>
      </>
    )
  }
}

export default Bolivia
