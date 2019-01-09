import React, { Component } from 'react'
import styled from '@emotion/styled'

import { BackgroundColor, Shadow } from '../../definitions'
import { Link } from '@reach/router'

interface Props {}

interface State {}

export default class HireButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <HireButtonStyled to='/contactpage'>Hire!</HireButtonStyled>
        {/* <HireButtonStyled onClick={() => this.setState({ open: true })}>
          Hire!
        </HireButtonStyled>
        {this.state.open ? <HirePopUp /> : null} */}
      </>
    )
  }
}

const HireButtonStyled = styled(Link)`
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
