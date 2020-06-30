import React, { Component } from 'react'

import { SkeletonTheme } from "react-loading-skeleton";

import { fetchSudGeneralData, fetchSudCountriesData, fetchCountriesHistoryData } from '../api'

import { SudamericaMap, SudamericaTable, SudamericaChart, SudamericaCard } from "../components/Sudamerica"


// reactstrap components
import {
  Card,
  Row,
  Col
} from "reactstrap";



export class Sudamerica extends Component {

  state = {
    continentData: {},
    countriesData: [],
    historyData: []
  }

  

  async componentDidMount() {
    const fetchedContinent = await fetchSudGeneralData();
    const fetchedCountries = await fetchSudCountriesData();
    const fetchedHistory = await fetchCountriesHistoryData();
    //setInterval(() => {
      this.setState({ 
        continentData: fetchedContinent,
        countriesData: fetchedCountries,
        historyData: fetchedHistory
      })
    //}, 60000);
    
    //console.log(this.state.countriesData)
    //console.log(this.state.historyData)
  }


  
  

  render() {
    //const { continetData } = this.state;
    
    return (
      
      <div className="content">
        <SkeletonTheme color="#1e1e2f" highlightColor="#BFBFC5">
          

          <Row>
            <Col xs="12" md="6">
              <Card>
                <SudamericaMap data={this.state.countriesData} />
              </Card>
            </Col>
            <Col xs="12" md="6">
              <SudamericaCard data={this.state.continentData} />
            </Col>
          </Row>


          <Row>
            <Col xs="12">
                <SudamericaChart timeline={this.state.historyData} data={this.state.countriesData} />
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <SudamericaTable data={this.state.countriesData} />
            </Col>
          </Row>


        </SkeletonTheme>
      </div>
      
    )
  }
}

export default Sudamerica
