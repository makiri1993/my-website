import React, { Component } from 'react'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import './popover.css'
export enum PopoverPlacement {
  RIGHT = 'right',
  LEFT = 'left',
  TOP = 'top',
  BOTTOM = 'bottom'
}

interface Props {
  children: string
  buttonTitle: string
  popoverTitle: string
  placement: PopoverPlacement
}

interface State {
  popoverOpen: boolean
}

export default class PopOver extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      popoverOpen: false
    }
  }

  private toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  render() {
    return (
      <li
        id='Popover1'
        className='event'
        data-date={this.props.buttonTitle}
        onClick={this.toggle}
      >
        <Popover
          placement={this.props.placement}
          isOpen={this.state.popoverOpen}
          target='Popover1'
          toggle={this.toggle}
        >
          <PopoverHeader>{this.props.popoverTitle}</PopoverHeader>
          <PopoverBody>{this.props.children}</PopoverBody>
        </Popover>
      </li>
    )
  }
}
