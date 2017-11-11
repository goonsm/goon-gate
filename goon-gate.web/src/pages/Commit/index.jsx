import React, { Component } from 'react';
import styled from 'styled-components';

import Messenger from 'sections/Messenger';

import {NoScrollPage} from 'utils/Layout';

const Container = styled(NoScrollPage)`

`

export default class Commit extends Component {
	render() {
		return (
			<Container>
				<Messenger/>
			</Container>
		);
	}
}
