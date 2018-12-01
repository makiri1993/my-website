import React, { Component, CSSProperties } from 'react'

interface Props {
  style?: CSSProperties
}
export default class TerminalIcon extends Component<Props> {
  render() {
    return (
      <svg
        style={this.props.style}
        aria-hidden='true'
        data-prefix='fas'
        data-icon='terminal'
        className='svg-inline--fa fa-terminal fa-w-20'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 640 512'
      >
        <path
          fill='currentColor'
          // tslint:disable-next-line:max-line-length
          d='M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z'
        />
      </svg>
    )
  }
}
