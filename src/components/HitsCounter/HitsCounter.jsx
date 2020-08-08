import React, { Component } from 'react';
import countapi from 'countapi-js';

import {
  Alert
} from 'reactstrap'
 
class HitsCounter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: 0,
    };
  }
 
  async componentDidMount() {
    if(process.env.NODE_ENV === 'production') {
      const data = await countapi.hit('covid19bo.diazportela.com', 'visits');
      //console.log(data.value)
      this.setState({ hits: data.value })
    }
  }
 
  render () {
    const { hits } = this.state;
    return (
      <div className="hits-counter">

      <Alert className="strong-color" color="primary">
        <i className="tim-icons icon-tap-02"></i> Visitas: { hits }
      </Alert>

      </div>
    )
  }
}
 
export default HitsCounter;