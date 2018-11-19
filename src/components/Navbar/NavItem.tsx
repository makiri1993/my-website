import React, { Component, ReactNode } from 'react'

interface Props {
  active?: boolean
  children?: ReactNode
}

export default class NavItem extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  private get renderProps(): string {
    const classNames: string[] = ['nav-item', 'nav-link']
    if (this.props.active) {
      classNames.push('active')
    }
    return classNames.join(' ')
  }
  render() {
    return (
      <a className={this.renderProps} href='#'>
        {this.props.children}
      </a>
    )
  }
}
