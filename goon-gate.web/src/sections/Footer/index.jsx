import React, {PureComponent} from "react";

import styled from 'styled-components';

import {FooterContainer} from 'utils/Layout';

const StyledFooter = styled(FooterContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #201e1f;
  color: white;
  font-size: 1em;
  text-align: center;
`;

export default class Footer extends PureComponent {
	render() {
		return (
			<StyledFooter id="Copyright">
        This work is licensed under a GOON LICENSE
			</StyledFooter>
		);
	}
}
