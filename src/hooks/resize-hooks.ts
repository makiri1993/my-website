import { useEffect, useState, RefObject, useRef } from 'react'

export function useBreakpoint(breakpoint: number) {
  const [isMobile, setMobile] = useState(false)

  const handleResize = () => {
    window.innerWidth > breakpoint ? setMobile(false) : setMobile(true)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    setMobile(!(window.innerWidth > breakpoint))
  })
  useEffect(() => () => {
    window.removeEventListener('resize', handleResize)
  })

  return isMobile
}

export function useScrolling<T extends HTMLElement>(): { ref: RefObject<T>; visible: boolean } {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
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

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    handleScroll()
  })
  useEffect(() => () => document.removeEventListener('scroll', handleScroll))

  return { ref, visible }
}
