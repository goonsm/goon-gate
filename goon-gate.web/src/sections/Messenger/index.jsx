import React, {Component} from 'react';

import styled from 'styled-components';

import gitchat from 'gitchat';

import InputSubmit from 'react-input-submit';

import ChannelContainer from 'components/ChannelContainer';

import ChannelCell from 'components/ChannelCell'
import MessageCell from 'components/MessageCell'

import {FlexRowDiv} from 'utils/Layout';

import {SideBarContainer, ChatContainer, MessageContainer, InputContainer,} from './Layout';

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
		if (!this.gitChatInstance) {
			return;
		}
		try {
			const {gitChatInstance} = this;

  		const {channel} = this.state;

  		const messages = await gitChatInstance.getMessagesFromChannel(channel);

  		this.setState({messages});
		} catch (e) {
			console.error(e);
		}
	}

	componentWillMount() {
		this.fetchMessages();
	}

  processCommand = async(message) => {
  	const tokens = message.split(' ');
  	switch (tokens[0]) {
  	case '/login':
  	default: {
  		const [, username, password, repo] = tokens;
  		this.gitChatInstance = new gitchat(username, password, repo);
  		this.fetchMessages();
  	}
  	}
  }

	sendMessage = async(message) => {
		// '/' means command
		if (message[0] === '/') {
			return this.processCommand(message);
		}

		if (!this.gitChatInstance) {
			return;
		}

		try {
			const {gitChatInstance} = this;
			await gitChatInstance.sendChatMessage(this.state.branch, message);

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
