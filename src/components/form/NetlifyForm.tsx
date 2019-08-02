import React, { ChangeEvent, useState, FormEvent, ReactNode } from 'react'

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
export interface NetlifyFormProps {
  closeMethod: () => void
}

const NetlifyForm = ({ closeMethod }: NetlifyFormProps) => {
  const formName = 'my-website'

  const nameId = 'name'
  const nameLabel = 'Your name'
  const [name, setName] = useState('')
  const emailId = 'email'
  const emailLabel = 'Your email'
  const [email, setEmail] = useState('')
  const numberId = 'number'
  const numberLabel = 'Your number'
  const [number, setNumber] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = { name, email, number }
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': formName, ...data }),
      })
    } catch (error) {
      error('data not send, error')
    }
    console.log('TCL: handleSubmit -> data', data)
    closeMethod()
  }

  return (
    <form className="z-10 w-9/12 bg-indigo-100 rounded p-4 shadow-lg" onSubmit={handleSubmit}>
      <FormGroup id={nameId} label={nameLabel} value={name} changeFunction={setName} type="name" />
      <FormGroup id={emailId} label={emailLabel} value={email} changeFunction={setEmail} type="email" />
      <FormGroup id={numberId} label={numberLabel} value={number} changeFunction={setNumber} type="tel" />
      <div className="flex justify-around">
        <FormAction label="Cancel" clickMethod={closeMethod} />
        <FormAction label="Send" submit clickMethod={() => console.log('data was sent!')} />
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
      <FormLabel id={id} label={label}>
        <FormInput id={id} placeholder={label} type={type} value={value} changeFunction={changeFunction} />
      </FormLabel>
    </div>
  )
}

const FormLabel = ({ children, id, label }: { children: ReactNode; id: string; label: string }) => {
  return (
    <label className="text-orange-900 mb-2" htmlFor={id}>
      {label} {children}
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
      name={id}
      className="mb-4 bg-indigo-100 border border-orange-900 w-full"
      type={type}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => changeFunction(event.target.value)}
      placeholder={placeholder}
    />
  )
}

const FormAction = ({ label, submit, clickMethod }: { label: string; submit?: boolean; clickMethod: () => void }) => {
  return (
    <button type={submit ? 'submit' : 'button'} className="text-orange-900" onClick={() => clickMethod()}>
      {label}
    </button>
  )
}

export default NetlifyForm
