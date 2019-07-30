import React, { useState, useEffect, ReactNode } from 'react'
import { useBreakpoint } from '../../hooks/resize-hooks'

interface IntroductionProps {
  content: string
}

const Introduction = ({ content }: IntroductionProps) => {
  const isMobile = useBreakpoint(415)
  return (
    <div className="container h-screen ">
      <div className="flex flex-col px-6 justify-center h-full">
        <p className="uppercase mb-4 md:max-w-3xl text-orange-900 whitespace-pre-line">
          {content.split('').map(
            (letter, index): ReactNode => (
              <TypedLetter key={index} letter={letter} timeout={index} />
            ),
          )}
        </p>
        <button
          onClick={(): void => {
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

const TypedLetter = ({ letter, timeout }: { letter: string; timeout: number }) => {
  const [shownLetter, setShownLetter] = useState(false)
  let timer: NodeJS.Timeout
  useEffect(() => {
    timer = setTimeout((): void => setShownLetter(true), 40 * timeout)
  })
  useEffect(() => () => clearTimeout(timer))

  return <span className={`${shownLetter ? 'opacity-100' : 'opacity-0'}`}>{letter}</span>
}

export default Introduction
