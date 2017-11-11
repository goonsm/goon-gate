import React, {Component} from 'react';

import styled from 'styled-components';

import gitchat from 'gitchat';

import InputSubmit from 'react-input-submit';

import ChannelContainer from 'components/ChannelContainer';

import ChannelCell from 'components/ChannelCell'
import MessageCell from 'components/MessageCell'

import {FlexRowDiv} from 'utils/Layout';

import {SideBarContainer, ChatContainer, MessageContainer, InputContainer,} from './Layout';

import creds from 'credentials.json';

const {username, password, repo,} = creds.gitchat;

const GitChatInstance = new gitchat(username, password, repo)

const CHANNELS = new Array(7)
	.fill(0)
	.map((item, i) => `#Channel ${i}`);

const Container = styled(FlexRowDiv)`
  height: 100%;
`

export default class extends Component {

	state = {
		channel: 'master',
		messages: [],
	}

	fetchMessages = async() => {
		const {channel} = this.state;

		const messages = await GitChatInstance.getMessagesFromChannel(channel);

		this.setState({messages});
	}

	componentWillMount() {
		this.fetchMessages();
	}

	sendMessage = async(message) => {
		try {
			await GitChatInstance.sendChatMessage(this.state.branch, message);

			this.fetchMessages();
		} catch (e) {
			console.error(e);
		}
	}

	render() {
		return (
			<Container>
				<SideBarContainer>
					<ChannelContainer>
						{CHANNELS.map((channel, i) => <ChannelCell key={i}>{channel}</ChannelCell>)}
					</ChannelContainer>
				</SideBarContainer>
				<ChatContainer>
					<MessageContainer>
						{this
							.state
							.messages
							.map((message, i) => <MessageCell key={i}>{message}</MessageCell>)}
					</MessageContainer>

					<InputContainer>
						<InputSubmit placeholder="Message here" onSubmit={this.sendMessage}/>
					</InputContainer>
				</ChatContainer>
			</Container>
		);
	}
}
