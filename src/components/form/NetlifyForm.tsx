import React, { ChangeEvent, useState } from 'react'

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const NetlifyForm = () => {
  const nameId = 'input-name'
  const nameLabel = 'Your name'
  const [name, setName] = useState('')
  const emailId = 'input-email'
  const emailLabel = 'Your email'
  const [email, setEmail] = useState('')
  const numberId = 'input-number'
  const numberLabel = 'Your number'
  const [number, setNumber] = useState('')

  const handleSubmit = (e: any) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'test', name, email, number }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  //   const handleChange = (e: ChangeEvent) => this.setState({ [e.target.name]: e.target.value })

  return (
    <form
      className="z-10 w-9/12 bg-indigo-100 rounded p-4 shadow-lg"
      name="test"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="test" />
      <FormGroup id={nameId} label={nameLabel} value={name} changeFunction={setName} type="name" />
      <FormGroup id={emailId} label={emailLabel} value={email} changeFunction={setEmail} type="email" />
      <FormGroup id={numberId} label={numberLabel} value={number} changeFunction={setNumber} type="phone" />
      <div className="flex justify-around">
        <FormAction label="Cancel" />
        <FormAction label="Send" submit />
      </div>
    </form>
  )
}

const FormGroup = ({
  id,
  label,
  type,
  value,
  changeFunction,
}: {
  id: string
  label: string
  type: string
  value: string
  changeFunction: (value: string) => void
}) => {
  return (
    <div className="flex flex-col w-full">
      <FormLabel id={id} label={label} />
      <FormInput id={id} placeholder={label} type={type} value={value} changeFunction={changeFunction} />
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

const FormInput = ({
  id,
  placeholder,
  type,
  value,
  changeFunction,
}: {
  id: string
  placeholder: string
  type: string
  value: string
  changeFunction: (value: string) => void
}) => {
  return (
    <input
      id={id}
      className="mb-4 bg-indigo-100 border border-orange-900 w-full"
      type={type}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => changeFunction(event.target.value)}
      placeholder={placeholder}
    />
  )
}

const FormAction = ({ label, submit, clickMethod }: { label: string; submit?: boolean; clickMethod?: () => void }) => {
  return (
    <button type={submit ? 'submit' : 'button'} className="text-orange-900 ">
      {label}
    </button>
  )
}

export default NetlifyForm
