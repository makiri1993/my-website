import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { Link } from 'gatsby'

const encode = (data: { [key: string]: string | boolean }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
export interface NetlifyFormProps {
  closeMethod: () => void
}

const NetlifyForm = ({ closeMethod }: NetlifyFormProps) => {
  const formName = 'my-website-2'

  const nameId = 'name'
  const nameLabel = 'My name is'
  const [name, setName] = useState('')
  const emailId = 'email'
  const emailLabel = 'My email is'
  const [email, setEmail] = useState('')
  const numberId = 'number'
  const numberLabel = 'Your number'
  const [number, setNumber] = useState('')
  const agreementId = 'agreement'
  const agreementLabel = 'Check the checkbox'
  const [agreement, setAgreement] = useState(false)
  const projectId = 'project'
  const projectLabel = 'I want to talk about'
  const [project, setProject] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = { name, email, number, project, agreement }
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': formName, ...data }),
      })
      setName('')
      setEmail('')
      setNumber('')
      setAgreement(false)
      setProject('')
    } catch (error) {
      error('data not send, error')
    }

    closeMethod()
  }

  return (
    <form className="z-10 w-9/12 lg:w-6/12 bg-indigo-100 rounded p-4 md:pb-16 shadow-lg" onSubmit={handleSubmit}>
      <h1 className="text-orange-900 md:mb-10">Feel free to contact me about any project!</h1>
      <FormGroup id={nameId} label={nameLabel} value={name} changeFunction={setName} type="name" />
      <FormGroup required id={emailId} label={emailLabel} value={email} changeFunction={setEmail} type="email" />
      <FormGroup id={numberId} label={numberLabel} value={number} changeFunction={setNumber} type="tel" />
      <FormGroup id={projectId} label={projectLabel} value={project} changeFunction={setProject} type="text" />
      <FormGroup
        id={agreementId}
        required
        label={agreementLabel}
        value={agreement}
        changeFunction={setAgreement}
        type="checkbox"
      />
      <div className="flex justify-around md:mt-10">
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
  required,
  changeFunction,
}: {
  id: string
  label: string
  type: string
  value: string | boolean
  required?: boolean
  changeFunction: Dispatch<SetStateAction<boolean>> | Dispatch<SetStateAction<string>>
}) => {
  return (
    <div className="flex flex-col mb-4 md:mb-8 md:flex-row w-full">
      <FormLabel id={id} label={label} />
      {typeof value === 'string' ? (
        <FormInput
          id={id}
          // placeholder={label}
          type={type}
          value={value}
          required={required}
          changeFunction={changeFunction as Dispatch<SetStateAction<string>>}
        />
      ) : (
        <FormCheckbox
          id={id}
          // placeholder={label}
          type={type}
          value={value}
          required={required}
          changeFunction={changeFunction as Dispatch<SetStateAction<boolean>>}
        />
      )}
    </div>
  )
}

const FormLabel = ({ id, label }: { id: string; label: string }) => {
  return (
    <label className="text-orange-900 md:w-3/12" htmlFor={id}>
      {label}
    </label>
  )
}

const FormInput = ({
  id,
  // placeholder,
  type,
  value,
  required,
  changeFunction,
}: {
  id: string
  // placeholder: string
  type: string
  value: string
  required?: boolean
  changeFunction: Dispatch<SetStateAction<string>>
}) => {
  return (
    <input
      name={id}
      className="bg-indigo-100 border border-orange-900 w-full md:w-9/12"
      type={type}
      value={value}
      required={required}
      onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => changeFunction(value)}
      // // placeholder={placeholder}
    />
  )
}

const FormCheckbox = ({
  id,
  // placeholder,
  type,
  value,
  required,
  changeFunction,
}: {
  id: string
  // placeholder: string
  type: string
  value: boolean
  required?: boolean
  changeFunction: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="flex items-center mb-4 ">
      <input
        name={id}
        className="bg-indigo-100 border border-orange-900 mr-2"
        type={type}
        checked={value}
        required={required}
        onChange={({ target: { checked } }: ChangeEvent<HTMLInputElement>) => changeFunction(checked)}
        // // placeholder={placeholder}
      />
      <div className="text-orange-900 text-xs">
        I&lsquo;m agreeing with the <Link to="/privacy">Privacy Policy</Link>
      </div>
    </div>
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
