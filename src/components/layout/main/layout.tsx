import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'

import './layout.scss'
import Nav from '../../nav/Nav'

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
