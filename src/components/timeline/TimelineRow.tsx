import React from 'react'
import TimelineElementModel from '../../model/TImelineElementModel'
import TimelineElement from './TimelineElement'
import { useBreakpoint } from '../../hooks/resize-hooks'

interface TimelineRowProps {
  timelineElement: TimelineElementModel
}

const TimelineRow = ({ timelineElement }: TimelineRowProps) => {
  const breakPointForTimeline = 415
  const isMobile = useBreakpoint(breakPointForTimeline)
  const renderLeft = () => {
    if (isMobile) {
      return (
        <div className="flex">
          <div className="w-10/12">
            <TimelineElement timelineData={timelineElement} textAlign="text-left"></TimelineElement>
          </div>
          <VerticalSeparator />
        </div>
      )
    } else {
      return (
        <div className="flex">
          <div className="w-5/12">
            <TimelineElement timelineData={timelineElement} textAlign="text-left"></TimelineElement>
          </div>
          <VerticalSeparator />
          <div className="w-5/12"></div>
        </div>
      )
    }
  }

  const renderRight = () => {
    return (
      <div className="flex">
        <div className="w-5/12"></div>
        <VerticalSeparator />
        <div className="w-5/12">
          <TimelineElement timelineData={timelineElement} textAlign="text-right"></TimelineElement>
        </div>
      </div>
    )
  }
  if (isMobile) {
    return renderLeft()
  } else {
    return timelineElement.position === 1 ? renderLeft() : renderRight()
  }
}

const VerticalSeparator = () => (
  <div className="w-2/12 flex justify-center">
    <div className="h-full w-1 bg-black"></div>
  </div>
)

export default TimelineRow
