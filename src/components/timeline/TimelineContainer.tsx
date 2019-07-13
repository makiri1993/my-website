import React from 'react'
import TimelineRow from './TimelineRow'
import TimelineElementModel from '../../model/TImelineElementModel'

interface TimelineProps {
  timelineElements: TimelineElementModel[]
}

const TimelineContainer = ({ timelineElements }: TimelineProps) => {
  const getGridRows = () => {
    return {
      gridTemplateRows: `repeat(${timelineElements.length}, max-content)`,
    }
  }

  return (
    <div className="flex flex-col px-6">
      {timelineElements.map((el, index) => (
        <TimelineRow key={index} timelineElement={el}></TimelineRow>
      ))}
    </div>
  )
}

export default TimelineContainer
