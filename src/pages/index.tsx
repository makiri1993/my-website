import React, { Component } from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import SinglePage from '../components/scenes/SinglePage'

export default class IndexPage extends Component {
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
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 400;
              src: url('../../public/static/Poppins/Poppins-Regular.ttf')
                format('truetype');
            }
            * {
              margin: 0;
              color: white !important;
              font-family: 'Poppins', Fallback, sans-serif;
            }
          `}
        />
        <SinglePage />
      </>
    )
  }
}
