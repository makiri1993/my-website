import React, { Component, ReactNode } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

interface Props {
  children: ReactNode[]
}

interface State {
  isOpen: boolean
}

export default class NavBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color='dark' light expand='md'>
          <NavbarBrand href='/'>Makiris Website</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {this.props.children.map(child => (
            <NavItem>
              <NavLink>{child}</NavLink>
            </NavItem>
          ))}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/components/'>Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
