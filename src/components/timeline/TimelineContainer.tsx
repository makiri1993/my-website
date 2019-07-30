import React from 'react'
import TimelineRow from './TimelineRow'
import TimelineElementModel from '../../model/TImelineElementModel'

interface TimelineProps {
  timelineElements: TimelineElementModel[]
}

const TimelineContainer = ({ timelineElements }: TimelineProps) => {
  return (
    <div className="bg-orange-900">
      <div className="container flex flex-col px-6 py-24 ">
        {timelineElements.map((el, index) => (
          <TimelineRow key={index} side={index} timelineElement={el} />
        ))}
      </div>
    </div>
  )
}

export default TimelineContainer
