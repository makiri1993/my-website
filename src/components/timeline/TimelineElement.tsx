import React, { useEffect, useRef, useState } from 'react'
import TimelineElementModel from '../../model/TImelineElementModel'
import { useScrolling } from '../../hooks/resize-hooks'

interface TimelineElementProps {
  timelineData: TimelineElementModel
}
const TimelineElement = ({ timelineData }: TimelineElementProps) => {
  const { ref, visible } = useScrolling<HTMLDivElement>()

  return (
    <div
      className={`pt-6 pb-16 flex flex-col transition-opacity ${
        visible ? 'opacity-100' : 'opacity-0'
      } border-t-2 border-orange-400 hover:shadow`}
      ref={ref}
    >
      <h2 className={`font-bold mb-1 text-indigo-100`}>{timelineData.header}</h2>
      <h3 className={`text-sm mb-1 underline text-indigo-100`}>{timelineData.subheader}</h3>
      <h4 className={`text-sm mb-2 text-indigo-100`}>
        {timelineData.place} | {timelineData.time}
      </h4>
      <p className={`text-sm whitespace-pre-line text-indigo-100`}>{timelineData.information}</p>
    </div>
  )
}

export default TimelineElement
