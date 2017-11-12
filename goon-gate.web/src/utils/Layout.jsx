import styled from 'styled-components';

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumnSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
  height: 10vh;
`;

export const FooterContainer = styled.footer`
  height: 5vh;
`

export const NoScrollPage = styled(FlexColumnSection)`
  height: 85vh;
`;

export const LongPage = styled(FlexColumnSection)`
  min-height: 85vh;
`;

export const FullHeightColumnFlexSpaceBetweenDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
