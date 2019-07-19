import { Link } from 'gatsby'
import React, { ReactNode } from 'react'
import { useScrolling } from '../../hooks/resize-hooks'
import TimelineElementModel from '../../model/TImelineElementModel'

interface TimelineElementProps {
  timelineData: TimelineElementModel
}
const TimelineElement = ({ timelineData }: TimelineElementProps): ReactNode => {
  const { ref, visible } = useScrolling<HTMLDivElement>()
  const { slug, header, subheader, information, place, time } = timelineData
  return (
    <Link className="cursor-pointer" to={slug}>
      <div
        className={`pt-6 pb-16 flex flex-col transition-opacity ${
          visible ? 'opacity-100' : 'opacity-0'
        } border-t-2 border-orange-400 hover:shadow`}
        ref={ref}
      >
        <h2 className={`font-bold mb-1 text-indigo-100`}>{header}</h2>
        <h3 className={`text-sm mb-1 underline text-indigo-100`}>{subheader}</h3>
        <h4 className={`text-sm mb-2 text-indigo-100`}>
          {place} | {time}
        </h4>
        <p className={`text-sm whitespace-pre-line text-indigo-100`}>{information}</p>
      </div>
    </Link>
  )
}

export default TimelineElement
