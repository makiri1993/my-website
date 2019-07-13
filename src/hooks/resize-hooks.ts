import { useEffect, useState } from 'react'

export function useBreakpoint(breakpoint: number) {
  const [isMobile, setMobile] = useState(!(window.innerWidth > breakpoint))

  useEffect(() => window.addEventListener('resize', handleResize))
  useEffect(() => () => {
    window.removeEventListener('resize', handleResize)
  })

  const handleResize = () => {
    window.innerWidth > breakpoint ? setMobile(false) : setMobile(true)
  }
  return isMobile
}
