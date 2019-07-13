import React, { useEffect, useRef, useState } from 'react'
import TimelineElementModel from '../../model/TImelineElementModel'

interface TimelineElementProps {
  timelineData: TimelineElementModel
  textAlign: 'text-left' | 'text-right'
}
const TimelineElement = ({ timelineData, textAlign }: TimelineElementProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const handleScroll = (event: any) => {
    if (ref.current) {
      const { offsetTop } = ref.current
      const { scrollY, innerHeight } = window
      if (offsetTop - scrollY < innerHeight * 0.7) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  }

  useEffect(() => document.addEventListener('scroll', handleScroll))
  useEffect(() => () => document.addEventListener('scroll', handleScroll))

  return (
    <div className={`pt-6 pb-16 flex flex-col transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
      {/* <font-awesome-icon icon={timelineData.icon} className="mb-1" style={iconAlignment} /> */}
      <h2 className={`font-bold mb-1 ${textAlign}`}>{timelineData.header}</h2>
      <h3 className={`text-sm mb-1 ${textAlign}`}>{timelineData.subheader}</h3>
      <h4 className={`text-sm mb-2 ${textAlign}`}>
        {timelineData.place} | {timelineData.time}
      </h4>
      <p className={`text-sm whitespace-pre-line ${textAlign}`}>{timelineData.information}</p>
    </div>
  )
}

export default TimelineElement
