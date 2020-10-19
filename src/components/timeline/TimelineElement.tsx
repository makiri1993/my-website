import { Link } from 'gatsby'
import React, { FC } from 'react'
import { useScrolling } from '../../hooks/resize-hooks'
import { cutProjectDescription, TimelineElementEntry } from '../../model/TImelineElementModel'

interface TimelineElementProps {
  timelineData: TimelineElementEntry
}

const TimelineElement: FC<TimelineElementProps> = ({
  timelineData: { header, html, information, place, slug, subheader, time },
}) => {
  const { ref, visible } = useScrolling<HTMLDivElement>()

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
        <hr className="border-secondary mb-4" />
        <p
          className={`text-sm whitespace-pre-line font-light text-primary`}
          dangerouslySetInnerHTML={{ __html: cutProjectDescription(html) }}
        ></p>
      </div>
    </Link>
  )
}

export default TimelineElement
