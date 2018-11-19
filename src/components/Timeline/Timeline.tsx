import React, { Component, ReactNode } from 'react'
import './timeline.css'

interface Props {
  children: ReactNode
}
export default class Timeline extends Component<Props> {
  render() {
    return <ul className='timeline'>{this.props.children}</ul>
  }
}
