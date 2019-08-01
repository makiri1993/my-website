import React from 'react'

const NetlifyForm = () => {
  const nameId = 'input-name'
  const nameLabel = 'Your name'
  const emailId = 'input-email'
  const emailLabel = 'Your email'
  const numberId = 'input-number'
  const numberLabel = 'Your number'
  return (
    <form
      className="z-10 w-9/12 bg-indigo-100 rounded p-4 shadow-lg"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <FormGroup id={nameId} label={nameLabel} type="name" />
      <FormGroup id={emailId} label={emailLabel} type="email" />
      <FormGroup id={numberId} label={numberLabel} type="phone" />
      <div className="flex justify-around">
        <FormAction label="Cancel" />
        <FormAction label="Send" />
      </div>
    </form>
  )
}

const FormGroup = ({ id, label, type }: { id: string; label: string; type: string }) => {
  return (
    <div className="flex flex-col w-full">
      <FormLabel id={id} label={label} />
      <FormInput id={id} placeholder={label} type={type} />
    </div>
  )
}

const FormLabel = ({ id, label }: { id: string; label: string }) => {
  return (
    <label className="text-orange-900 mb-2" htmlFor={id}>
      {label}
    </label>
  )
}

const FormInput = ({ id, placeholder, type }: { id: string; placeholder: string; type: string }) => {
  return (
    <input
      id={id}
      className="mb-4 bg-indigo-100 border border-orange-900 w-full"
      type={type}
      placeholder={placeholder}
    />
  )
}

const FormAction = ({ label, clickMethod }: { label: string; clickMethod?: () => void }) => {
  return <button className="text-orange-900 ">{label}</button>
}

export default NetlifyForm
