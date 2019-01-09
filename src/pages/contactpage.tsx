import React, { Component } from 'react'

interface Props {
  path: string
}
export default class ContactPage extends Component<Props> {
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
