import React, { Component } from 'react'
import notFoundImg from '../assets/img/404_1.png'

export class NotFound extends Component {

  render() {
    return (
      <div className="content text-center">
        <img className="not_found_img" src={notFoundImg} alt="404 - Not Found"/>
        <br/><br/>
        <h3>Ir a <a className="text-primary" href="/">Bolivia</a> </h3>
      </div>
    )
  }
}

export default NotFound
