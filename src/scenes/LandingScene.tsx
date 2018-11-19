import React, { Component } from 'react'
import { Jumbotron } from '../components/Jumbotron/index'

export default class LandingScene extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Jumbotron />
          </div>
        </div>
      </div>
    )
  }
}
