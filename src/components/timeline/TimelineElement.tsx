import React, { Component } from 'react'
import { TimelineElementData, TimelineElementPosition } from '../introduciton/Timeline/TimelineContainer'
import { TextAlignProperty, Properties } from 'csstype'

export default class TimelineElement extends Component {
  private timelineData!: TimelineElementData
  private index!: number
  private contentAlignment: any = null
  private iconAlignment: any = { fontSize: 'var(--icon-font-size)' }
  private animationDirection: string = ''

  created() {
    this.getJustifying()
  }

  private get timelineElementPosition() {
    const column: number = this.timelineData.position
    const row: number = this.index + 1
    const textAlign: TextAlignProperty = TimelineElementPosition[column].toLowerCase() as TextAlignProperty

    return {
      gridColumn: column,
      gridRow: row,
      textAlign,
    }
  }

  private getJustifying(): void {
    const alignStart: Properties = { alignSelf: 'start' }
    const alignEnd: Properties = { alignSelf: 'end' }

    if (this.timelineData.position === TimelineElementPosition.LEFT) {
      this.contentAlignment = alignStart
      this.iconAlignment = { ...this.iconAlignment, ...alignEnd }
      this.animationDirection = 'zoom-out-right'
    } else {
      this.contentAlignment = alignEnd
      this.iconAlignment = { ...this.iconAlignment, ...alignStart }
      this.animationDirection = 'zoom-out-left'
    }
  }

  render() {
    return (
      <div
        className="timeline-element"
        style={this.timelineElementPosition}
        data-aos={this.animationDirection}
        data-aos-delay="400"
        data-aos-once="true"
      >
        {/* <font-awesome-icon icon={this.timelineData.icon} className="mb-1" style={this.iconAlignment} /> */}
        <div className="timeline-element-border" style={this.contentAlignment} />
        <h2 className="timeline-content" style={this.contentAlignment}>
          {this.timelineData.header}
        </h2>
        <h3 className="timeline-content" style={this.contentAlignment}>
          {this.timelineData.subheader}
        </h3>
        <h4 className="timeline-content mb-1" style={this.contentAlignment}>
          {this.timelineData.place} | {this.timelineData.time}
        </h4>
        <p className="timeline-content" style={this.contentAlignment}>
          {this.timelineData.information}
        </p>
      </div>
    )
  }
}
