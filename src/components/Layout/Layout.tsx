import styled from '@emotion/styled'
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
const image = require('../../images/IMG_0255_3.jpg')

export default class Layout extends Component {
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
              src: url('../../../public/static/Poppins/Poppins-Regular.ttf')
                format('truetype');
            }
            * {
              margin: 0;
              color: white !important;
              font-family: 'Poppins', Fallback, sans-serif;
            }
          `}
        />
        <SiteBackground>
          <SiteContainer>{this.props.children}</SiteContainer>
        </SiteBackground>
      </>
    )
  }
}

const SiteBackground = styled.div`
  min-height: 100vh;
  background-image: url(${image});
  background-position: center;
  background-repeat: round;
  background-size: contain;
`

const SiteContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  align-items: center;
`
