import React from 'react';
import { Button, Card } from 'antd';
import styled from 'styled-components';

const DayCell = styled.div`
  border-bottom: 1px solid #E8E8E8;
  padding: 5px;
`;

const Cell = styled.div`
  border-bottom: 1px solid #E8E8E8;
  padding: 5px;
`;

const ScheduleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const daysName = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
const days = [29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2];

const Schedule = () => {
  return (
    <Card title="Grafik" style={{ gridColumn: "1 / 4" }} extra={
      <Button.Group>
        <Button type="primary" icon="unordered-list" />
        <Button type="primary" icon="table" />
      </Button.Group>
    }>
      <ScheduleContainer>
        {daysName.map(day => <DayCell>{day}</DayCell>)}
        {days.map(day => <Cell>{day}</Cell>)}
      </ScheduleContainer>
    </Card>
  )
}

export default Schedule;