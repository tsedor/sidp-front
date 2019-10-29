import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd'

const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
text-align: center;
`;

const SiteFooter = () => (
  <StyledFooter>&copy; 2019 by Arraio.pl</StyledFooter>
)

export default SiteFooter;