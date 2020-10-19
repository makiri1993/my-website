import React, { FC, ReactNode } from 'react'
import Nav from '../nav/Nav'
import '../../tailwind.css'
import Footer from '../footer/Footer'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="bg-background h-full">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
