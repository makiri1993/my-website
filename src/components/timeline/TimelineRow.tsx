import React, { ReactNode } from 'react'
import TimelineElementModel from '../../model/TImelineElementModel'
import TimelineElement from './TimelineElement'
import { useBreakpoint, useScrolling } from '../../hooks/resize-hooks'

interface TimelineRowProps {
  side: number
  timelineElement: TimelineElementModel
}

const TimelineRow = ({ timelineElement, side }: TimelineRowProps): ReactNode => {
  const breakPointForTimeline = 415
  const isMobile = useBreakpoint(breakPointForTimeline)
  const renderLeft = (): ReactNode => {
    if (isMobile) {
      return (
        <div className="flex">
          <div className="w-10/12">
            <TimelineElement timelineData={timelineElement} />
          </div>
          <VerticalSeparator />
        </div>
      )
    } else {
      return (
        <div className="flex">
          <div className="w-5/12">
            <TimelineElement timelineData={timelineElement} />
          </div>
          <VerticalSeparator />
          <div className="w-5/12"></div>
        </div>
      )
    }
  }

  const renderRight = (): ReactNode => {
    return (
      <div className="flex">
        <div className="w-5/12"></div>
        <VerticalSeparator />
        <div className="w-5/12">
          <TimelineElement timelineData={timelineElement} />
        </div>
      </div>
    )
  }
  if (isMobile) {
    return renderLeft()
  } else {
    return side % 2 === 0 ? renderLeft() : renderRight()
  }
}

const VerticalSeparator = (): ReactNode => {
  const { ref, visible } = useScrolling<HTMLDivElement>()

  return (
    <div className="w-2/12 flex justify-center" ref={ref}>
      <div className={`${visible ? 'h-full' : 'h-0'} w-1 bg-orange-400 transition-all`}></div>
    </div>
  )
}

export default TimelineRow
