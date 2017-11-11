import React from "react";

import { NavLink } from "react-router-dom";

import styled from "styled-components";

import {HeaderContainer} from 'utils/Layout';

const StyledHeader = styled(HeaderContainer)`
  display: fixed;
  top: 0;
  width: 100vw;
`;

const StyledNav = styled.nav`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;

  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;

  &:hover {
    background: palevioletred;
    color: white;
    opacity: 0.9;
  }

  &.active {
    background: palevioletred;
    color: white;
  }
`;

export default class Header extends React.Component {

	render() {
		return (
			<StyledHeader>
				<StyledNav>
					<StyledLink exact to="/" activeClassName="active">
            Home
					</StyledLink>
					{this.props.routes.map(({name, path}, i) =>
  					<StyledLink exact to={path} activeClassName="active" key={i}>
							{name}
  					</StyledLink>
					)}
				</StyledNav>
			</StyledHeader>
		);
	}
}
