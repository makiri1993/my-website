import { css, Global } from '@emotion/core'
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import SinglePage from '../components/scenes/SinglePage'

export default class IndexPage extends Component {
  render() {
    return (
      <>
        <SinglePage path='/' />
      </>
    )
  }
}
