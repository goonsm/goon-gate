import styled from 'styled-components';

import {
	FullHeightColumnFlexSpaceBetweenDiv
} from 'utils/Layout';

export const SideBarContainer = styled(FullHeightColumnFlexSpaceBetweenDiv)`
  background-color: #392c38;
  width: 18%;
`

export const ChatContainer = styled(FullHeightColumnFlexSpaceBetweenDiv)`
  width: 81%;
`

export const MessageContainer = styled.div`
  height: 90%;
  overflow-y: auto;
`

export const InputContainer = styled.div`
  height: 9%;
  input {
    text-transform: none;
  }
`
