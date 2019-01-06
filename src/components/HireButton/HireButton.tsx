import React, { Component } from 'react'
import styled from '@emotion/styled'

import HirePopUp from './HirePopUp'
import { BackgroundColor, Shadow } from '../../definitions'

interface Props {
  opened: boolean
}

interface State {
  open: boolean
}

export default class HireButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      open: this.props.opened,
    }
  }

  render() {
    return (
      <>
        <HireButtonStyled onClick={() => this.setState({ open: true })}>
          Hire!
        </HireButtonStyled>
        {this.state.open ? <HirePopUp /> : null}
      </>
    )
  }
}

const HireButtonStyled = styled.button`
  width: 35%;
  font-size: 5rem;
  letter-spacing: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: ${BackgroundColor.primary.lighter};

  transition: background 1s ease-in-out, box-shadow 1s ease-in-out;
  :hover {
    background: ${BackgroundColor.primary.standard};
    box-shadow: ${Shadow.light};
  }
`
