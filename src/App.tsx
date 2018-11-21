import React, { Component } from 'react'
import Helmet from 'react-helmet'

import SinglePage from './scenes/SinglePage'
import './app.css'

export default class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet='UTF-8' />
          <title>Makiris Website!</title>
        </Helmet>
        <SinglePage />
      </>
    )
  }
}
