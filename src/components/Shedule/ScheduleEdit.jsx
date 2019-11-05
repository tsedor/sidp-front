import React from 'react';
import { AutoComplete, Card, Form, Input, TimePicker, Button } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import localization from 'moment/locale/pl'
import { useSelector } from 'react-redux';

const StyledCard = styled(Card)`
  grid-column: 1 / 4;
`;

const StyledTimePicker = styled(TimePicker)`
  input {
    border-left: 0;
  }
`;
moment.locale('pl', localization);

const ScheduleEdit = (props) => {
  const timeFormat = "HH:mm";
  const { day, month, year } = props.match.params;
  const data = useSelector(state => state.scheduleReducer.schedule.filter(item => item.day.toString() === day & item.month.toString() === month));
  const work = data.length > 0 ? data.shift() : [{}];
  //tmp
  const stopsArray = ['Kombinat', 'Os. Podwawelskie', 'Os. Piastów', 'Dworzec Główny Zachód', 'Tauron Arena Kraków Wieczysta'];
  return (
    <StyledCard title={moment(new Date(`${year}-${month}-${day}`)).format('DD-MM-YYYY (dddd)')}>
      <Form>
        <Form.Item label="Numer linii i brygady">
          <Input.Group compact>
            <Input style={{ width: 100 }} type="number" defaultValue={work.line} />
            <Input style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="/" disabled />
            <Input style={{ width: 70, borderLeft: 0 }} type="number" defaultValue={work.brigade} />
          </Input.Group>
        </Form.Item>
        <Form.Item label="Godzina rozpoczęcia i zakończenia pracy">
          <Input.Group compact>
            <TimePicker defaultValue={moment(work.start_time, timeFormat)} format={timeFormat} />
            <Input style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="-" disabled />
            <StyledTimePicker defaultValue={moment(work.end_time, timeFormat)} format={timeFormat} style={{ borderLeft: 0 }} />
          </Input.Group>
        </Form.Item>
        <Form.Item label="Miejsce odbioru">
          <AutoComplete dataSource={stopsArray} style={{ width: 284 }} defaultValue={work.place} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Zapisz</Button>
        </Form.Item>
      </Form>
    </StyledCard>
  )
}

export default ScheduleEdit;