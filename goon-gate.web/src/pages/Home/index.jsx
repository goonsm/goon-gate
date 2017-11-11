import React, { PureComponent } from "react";

import styled from 'styled-components';

import {NoScrollPage} from 'utils/Layout';

const Container = styled(NoScrollPage)`
  justify-content: center;
  align-items: center;
`

export default class Home extends PureComponent {
	render() {
		return (
			<Container>
				Welcome to GoonGate. Look around!
			</Container>
		);
	}
}
