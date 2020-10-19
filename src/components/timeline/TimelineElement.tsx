import { Link } from 'gatsby'
import React, { FC } from 'react'
import { useScrolling } from '../../hooks/resize-hooks'
import TimelineElementModel from '../../model/TImelineElementModel'

interface TimelineElementProps {
  timelineData: TimelineElementModel
}
const TimelineElement: FC<TimelineElementProps> = ({ timelineData }) => {
  const { ref, visible } = useScrolling<HTMLDivElement>()
  const { slug, header, subheader, information, place, time } = timelineData
  return (
    <Link className="cursor-pointer" to={slug}>
      <div
        className={`pt-6 pb-16 flex flex-col transition-opacity duration-200 ease-in-out ${
          visible ? 'opacity-100' : 'opacity-0'
        } border-t-2 border-secondary hover:shadow`}
        ref={ref}
      >
        <h2 className={`font-bold mb-1 text-primary`}>{header}</h2>
        <h3 className={`text-sm mb-1 underline text-primary`}>{subheader}</h3>
        <h4 className={`text-sm mb-2 text-primary`}>
          {place} | {time}
        </h4>
        <p className={`text-sm whitespace-pre-line text-primary`}>{information}</p>
      </div>
    </Link>
  )
}

export default TimelineElement
