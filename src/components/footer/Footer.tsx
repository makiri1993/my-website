import React, { FC } from 'react'
import { Link } from 'gatsby'

const Footer: FC = () => {
  return (
    <div className="bg-background-darker">
      <div className="container px-6 py-4 flex justify-center">
        <Link className="text-primary mx-4" to="/imprint">
          Imprint
        </Link>
        <Link className="text-primary mx-4" to="/privacy">
          Privacy
        </Link>
      </div>
    </div>
  )
}

export default Footer
