import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className="bg-orange-900">
      <div className="container px-6 py-4 flex justify-center">
        <Link className="text-indigo-100 mx-4" to="/imprint">
          Imprint
        </Link>
        <Link className="text-indigo-100 mx-4" to="/privacy">
          Privacy
        </Link>
      </div>
    </div>
  )
}

export default Footer
