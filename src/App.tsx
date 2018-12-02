import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import SinglePage from './scenes/SinglePage'

export default class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet='UTF-8' />
          <title>Makiris Website!</title>
        </Helmet>
        <Global
          styles={css`
            @font-face {
              font-family: "Poppins";
              font-style: normal;
              font-weight: 400;
              src: url("../static/Poppins/Poppins-Regular.ttf")
                format("truetype");
            }
            * {
              margin: 0;
              font-family: "Poppins", Fallback, sans-serif;
            }
          `}
        />
        <SinglePage />
      </>
    )
  }
}
