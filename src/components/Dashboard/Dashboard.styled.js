import styled from 'styled-components';
import { Card, List } from 'antd';

export const AnnouncementTitle = styled.h4`
font-size: 16px;
`;

export const CardBody = styled.div`
display: flex;
flex-direction: column;
div:nth-child(even) {
  font-size: 16px;
}
`;

export const Item = styled(List.Item)`
align-items: flex-start!important;
display: flex;
flex-direction: column;
`;

export const ScheduleCard = styled(Card)`
@media (max-width: 800px) {
  grid-column: 1 / 4;
}
`;

export const SmallTitle = styled.div`
font-size: 12px;
font-weight: 700;
margin: 10px 0 0 0;
`;