import React, { useState } from 'react'
import NetlifyForm from './NetlifyForm'

const FormButton = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <button
        className="fixed bg-orange-400 shadow-lg text-indigo-100 rounded-full h-24 w-24"
        style={{ top: '8%', right: '4%' }}
        onClick={() => setShowForm(!showForm)}
      >
        Contact!
      </button>
      <div
        className={`${
          showForm ? 'flex' : 'hidden'
        } flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0`}
      >
        <NetlifyForm closeMethod={() => setShowForm(false)} />
        <div className="z-5 absolute w-full h-full bg-gray-500 opacity-50" />
      </div>
    </>
  )
}

export default FormButton
