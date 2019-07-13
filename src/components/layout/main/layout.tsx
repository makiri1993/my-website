import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'

import './layout.scss'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="bg-indigo-100 h-full">{children}</main>
    </>
  )
}

export default Layout
