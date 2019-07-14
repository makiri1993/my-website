import React, { ReactNode } from 'react'
import Nav from '../../nav/Nav'
import './layout.scss'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <main className="bg-indigo-100 h-full">{children}</main>
    </>
  )
}

export default Layout
