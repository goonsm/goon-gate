import React, {PureComponent} from "react";
import styled from 'styled-components';

import IPFSImageWrapper from "sections/IPFSImageWrapper";

import {NoScrollPage} from 'utils/Layout';

const Container = styled(NoScrollPage)`

`

export default class ImageViewer extends PureComponent {
	render() {
		return (
			<Container>
				<IPFSImageWrapper/>
			</Container>
		);
	}
}
