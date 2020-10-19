import React, { FC, useState } from 'react'
import { Button } from '../button/Button'
import NetlifyForm from './NetlifyForm'

const FormButton: FC = () => {
  const [showForm, setShowForm] = useState(false)

  const handleContactClick = () => setShowForm(!showForm)

  return (
    <>
      <Button className="fixed h-10 w-24" style={{ top: '8%', right: '6%' }} onClick={handleContactClick}>
        Contact!
      </Button>
      <div
        className={`${
          showForm ? 'flex' : 'hidden'
        } flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0`}
      >
        <NetlifyForm closeMethod={() => setShowForm(false)} />
        <div onClick={() => setShowForm(false)} className="z-5 absolute w-screen h-full bg-gray-500 opacity-50" />
      </div>
    </>
  )
}

export default FormButton
