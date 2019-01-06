import React, { Component, ChangeEvent } from 'react'

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

interface Props {}

interface State {
  name: string
  email: string
  message: string
}

export default class HirePopUp extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e: any) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = () => (
    e: ChangeEvent<HTMLInputElement>,
    value: string
  ): void => {
    const key = e.currentTarget.name

    if (Object.keys(this.state).includes(key)) {
      this.setState({ [key]: value } as Pick<State, keyof State>)
    }
  }

  render() {
    const { name, email, message } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name:{' '}
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{' '}
            <textarea
              name='message'
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    )
  }
}
