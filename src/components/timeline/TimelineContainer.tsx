import React from 'react'
import TimelineRow from './TimelineRow'
import TimelineElementModel from '../../model/TImelineElementModel'

interface TimelineProps {
  timelineElements: TimelineElementModel[]
}

const TimelineContainer = ({ timelineElements }: TimelineProps) => {
  return (
    <div className="flex flex-col px-6 py-24 bg-orange-900">
      {timelineElements.map((el, index) => (
        <TimelineRow key={index} timelineElement={el}></TimelineRow>
      ))}
    </div>
  )
}

export default TimelineContainer
