import React, { Component, CSSProperties } from 'react'

interface Props {
  style?: CSSProperties
}
export default class ProjectIcon extends Component<Props> {
  render() {
    return (
      <svg
        style={this.props.style}
        aria-hidden='true'
        data-prefix='fas'
        data-icon='project-diagram'
        className='svg-inline--fa fa-project-diagram fa-w-20'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 640 512'
      >
        <path
          fill='white'
          // tslint:disable-next-line:max-line-length
          d='M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z'
        />
      </svg>
    )
  }
}