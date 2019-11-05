import React, { useEffect } from 'react';
import { Button, Card, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { scheduleRequestStart, scheduleNextMonth, schedulePreviousMonth } from '../../actions/schedule';
import { generateDaysForCalendar } from './generateDaysForCalendar';
import WithAuth from '../HOC/WithAuth';
import { Cell, DayCell, EditButton, Month, ScheduleContainer, Spinner, WorkDetails } from './Schedule.styled';

const daysName = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
const monthsName = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
const workType = {dayOff: 'W'};

const Schedule = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(scheduleRequestStart())
  }, [dispatch]);

  const schedule = useSelector(state => state.scheduleReducer.schedule);
  const date = useSelector(state => state.scheduleReducer.date);
  const request = useSelector(state => state.scheduleReducer.request);
  const days = generateDaysForCalendar(date.year, date.month);

  return (
    <Card title="Grafik" style={{ gridColumn: "1 / 4" }} extra={
      <Button.Group>
        <Button type="primary" icon="unordered-list" />
        <Button type="primary" icon="table" />
      </Button.Group>
    }>
      <ScheduleContainer>
        <Spinner request={request}><Spin /></Spinner>
        <Month>
          <Button type="primary" icon="left" size="small" onClick={() => dispatch(schedulePreviousMonth())} />
          <span>{monthsName[date.month-1]} {date.year}</span>
          <Button type="primary" icon="right" size="small" onClick={() => dispatch(scheduleNextMonth())} />
        </Month>
        {daysName.map(day => <DayCell key={day}>{day}</DayCell>)}
        {days.map(day => {
          const data = schedule.filter(item => item.month === day.month && item.day === day.day).shift();
          return (
          <Cell key={`${day.day}-${day.month}`} sunday={day.sunday} current={day.current}>
            <div style={{ fontWeight: 700 }}>{day.day}</div>
            <WorkDetails onClick={() => props.history.push(`/schedule/show/${date.year}/${day.month}/${day.day}`)}>
              {(data !== undefined) && (data.type === 'work' ?
                <>
                  <div style={{ fontSize: 17, fontWeight: 600 }}>{data.line}-{data.brigade.toString().padStart(2, '0')}{data.start_time.substr(0, 2) >= 10 ? 'B' : 'A'}</div>
                  <div>{data.start_time.substr(0, 5)} - {data.end_time.substr(0, 5)}</div>
                  <div>{data.place}</div>
                </> : <div style={{ fontSize: 17, fontWeight: 600, color: '#389e0d' }}>{workType[data.type]}</div>
              )}
            </WorkDetails>
            <EditButton  onClick={() => props.history.push(`/schedule/edit/${date.year}/${day.month}/${day.day}`)}><Button type="link" icon="edit" /></EditButton>
          </Cell>
        )})}
      </ScheduleContainer>
    </Card>
  )
}

export default WithAuth(withRouter(Schedule));