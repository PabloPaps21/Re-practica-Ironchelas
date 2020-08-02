import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../styles/components';

export default class NavBar extends Component {
  render() {
    return(
      <>
        <StyledNavbar>
          <Link to="/">
            paps
          </Link>
        </StyledNavbar> 
      </>
    )
  }
}