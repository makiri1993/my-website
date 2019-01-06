import React, { Component } from 'react'

interface Props {}

interface State {
  name: string
  email: string
  message: string
}

export default class HirePopUp extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  /* Here’s the juicy bit for posting the form submission */

  // private handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   console.log('bin submit')
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: this.encode({ 'form-name': 'contact', ...this.state }),
  //   })
  //     .then(() => alert('Success!'))
  //     .catch(error => alert(error))

  //   e.preventDefault()
  // }

  // private handleChange = (e: any) => {
  //   // console.table(e.target)
  //   console.log(e.target)
  //   console.log(e.target.name)
  //   console.log(e.target.value)
  //   this.setState({ [e.target.name]: e.target.value } as any)
  // }

  // private encode = (data: any) => {
  //   return data
  //     .map(
  //       (key: any) =>
  //         encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  //     )
  //     .join('&')
  // }

  render() {
    return (
      <form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <input type='hidden' name='form-name' value='contact' />

        <p>
          <label>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type='email' name='email' />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message' />
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    )
  }
}
