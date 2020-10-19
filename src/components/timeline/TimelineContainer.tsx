import React, { FC } from 'react'
import TimelineRow from './TimelineRow'
import TimelineElementModel from '../../model/TImelineElementModel'

interface TimelineProps {
  timelineElements: TimelineElementModel[]
}

const TimelineContainer: FC<TimelineProps> = ({ timelineElements }) => {
  return (
    <div className="bg-background-darker">
      <div className="container flex flex-col px-6 py-24 ">
        {timelineElements.map((el, index) => (
          <TimelineRow key={index} side={index} timelineElement={el} />
        ))}
      </div>
    </div>
  )
}

export default TimelineContainer
