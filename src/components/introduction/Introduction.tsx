import React from 'react'
import { useBreakpoint } from '../../hooks/resize-hooks'

interface IntroductionProps {
  content: string[]
}

const Introduction = ({ content }: IntroductionProps) => {
  const isMobile = useBreakpoint(415)
  return (
    <div className="container h-screen ">
      <div className="flex flex-col px-6 justify-center h-full">
        {content.map((info, index) => (
          <p key={index} className="uppercase mb-4 md:max-w-3xl text-orange-900">
            {info}
          </p>
        ))}
        <button
          onClick={() => {
            scrollTo({
              top: window.screen.height * (isMobile ? 1 : 0.8),
              behavior: 'smooth',
            })
          }}
          className="mt-4 p-4 lowercase border-2 rounded bg-orange-400 text-indigo-100 lg:w-4/12 lg:self-start "
        >
          scroll to cv timeline
        </button>
      </div>
    </div>
  )
}

export default Introduction
