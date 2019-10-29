import { Layout } from 'antd';
import styled from 'styled-components';

const { Content, Header } = Layout;

export const StyledContent = styled(Content)`
margin: 10px 16px;
`;

export const StyledHeader = styled(Header)`
background: #FFFFFF!important;
`;

export const StyledLayout = styled(Layout)`
min-height: 100vh!important;
`;

export const StyledSiteContent = styled.div`
display: grid;
grid-gap: 16px;
grid-template-columns: 1fr 1fr 1fr;
margin: 10px 0;
min-height: 300px;
@media (max-width: 800px) {
  grid-template-columns: 1fr 1fr;
}
`;