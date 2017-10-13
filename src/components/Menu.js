import React from 'react'
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class Menu extends React.Component {

  render() {
    return(
        <Nav bsStyle="pills">
          <IndexLinkContainer to="/">
              <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/user-edit">
              <NavItem>Add User</NavItem>
          </LinkContainer>
        </Nav>
    )
  }
}
