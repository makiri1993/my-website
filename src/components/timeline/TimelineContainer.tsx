import React, { Component } from 'react'
import TimelineElement from '../introduciton/Timeline/TimelineElement'

export enum Icon {
  EDUCATION = 'graduation-cap',
  PROJECT = 'project-diagram',
  TERMINAL = 'terminal',
}

export enum TimelineElementPosition {
  LEFT = 1,
  RIGHT = 3,
}

export interface TimelineElementData {
  id: number
  header: string
  subheader: string
  place: string
  time: string
  information: string
  position: TimelineElementPosition
  icon: Icon
}

export default class TimelineContainer extends Component {
  private timelineElements!: TimelineElement[]

  private get getGridRows() {
    return {
      gridTemplateRows: `repeat(${this.timelineElements.length}, max-content)`,
    }
  }
  render() {
    return (
      <div className="timeline-container mt-4" style={this.getGridRows}>
        <div className="timeline" />
        {this.timelineElements.map((el, index) => (
          <TimelineElement timelineData={el} index={index} />
        ))}
      </div>
    )
  }
}
