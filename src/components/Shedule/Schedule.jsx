import React, { useEffect } from 'react';
import { Button, Card } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { scheduleRequestStart } from '../../actions/schedule';

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

const Schedule = () => {
  let x = 1;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(scheduleRequestStart())
  }, [dispatch]);

  const schedule = useSelector(state => state.scheduleReducer.schedule);
  return (
    <Card title="Grafik" style={{ gridColumn: "1 / 4" }} extra={
      <Button.Group>
        <Button type="primary" icon="unordered-list" />
        <Button type="primary" icon="table" />
      </Button.Group>
    }>
      <ScheduleContainer>
        {daysName.map(day => <DayCell style={{ fontWeight: 700 }} key={x++}>{day}</DayCell>)}
        {schedule.map(schedule => (
          <Cell key={x++} style={{ backgroundColor: schedule.sunday && "#ffeeee", filter: !schedule.current && "opacity(.2)" }}>
            <div style={{ fontWeight: 700 }}>{schedule.day}</div>
            <div style={{ paddingLeft: 20 }}>
              <div style={{ fontSize: 17, fontWeight: 600 }}>{schedule.line}-{schedule.brigade}{schedule.change}</div>
              <div>{schedule.startTime} - {schedule.endTime}</div>
              <div>{schedule.place}</div>
            </div>
          </Cell>
        ))}
      </ScheduleContainer>
    </Card>
  )
}

export default Schedule;