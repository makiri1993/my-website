import React from 'react'

interface IntroductionProps {
  content: string[]
}

const Introduction = ({ content }: IntroductionProps) => {
  return (
    <div className="container h-screen">
      <div className="flex flex-col px-6 justify-center h-full">
        {content.map((info, index) => (
          <p key={index} className="uppercase mb-4">
            {info}
          </p>
        ))}
        <button
          onClick={() => {
            scrollBy({
              top: window.screen.height,
              behavior: 'smooth',
            })
            console.log('TCL: Introduction -> window.screen.height', window.screen.height)
          }}
          className="mt-4 lowercase"
        >
          scroll to cv timeline
        </button>
      </div>
    </div>
  )
}

export default Introduction
