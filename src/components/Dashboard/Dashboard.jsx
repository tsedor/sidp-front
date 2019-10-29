import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, List, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { AnnouncementTitle, CardBody, Item, ScheduleCard, SmallTitle } from './Dashboard.styled';

const { Title } = Typography;

const Dashboard = () => {
  const schedule = useSelector(state => state.scheduleReducer.schedule);
  return (
    <>
    {schedule.map(item => (
      <ScheduleCard title={item.date} key={item.date} extra={<Link to="/schedule/2222">więcej</Link>}>
        <CardBody>
          <SmallTitle>Linia</SmallTitle>
          <Title level={3} style={{ margin: 0 }}>{item.line}</Title>
          <SmallTitle>Godziny pracy</SmallTitle>
          <div>{item.startTime} - {item.endTime} (5:48)</div>
          <SmallTitle>Miejsce odbioru</SmallTitle>
          <div>{item.startPlace}</div>
        </CardBody>
      </ScheduleCard>
    ))}
    <Card size="small" title="Najnowsze komunikaty" style={{ gridColumn: "1 / 4" }}>
      <List>
        <Item>
          <AnnouncementTitle>238 / 2019: Wszystkich Świętych 2019 – wzmocnienie komunikacji miejskiej w rejonie cmentarzy.</AnnouncementTitle>
          <div><b>Dotyczy linii:</b> 1, 2, 5, 9, 16, 21, 24, 71, 81, 82, 83, 84, 85, 86, 87, 88, 89, 100, 101, 105, 107, 110, 122, 123, 128, 138, 139, 142, 143, 154, 160, 163, 174, 183, 184, 193, 211, 224, 243, 260, 270, 405, 422, 484, 503, 537, 610, 801, 802, 803, 804, 805, 806, 807, 809, 810, 811, 812, 814, 820, 838, 842, 851, 854, 860, 863, 872, 874, 883, 884, 888</div>
          <div><b>Obowiązuje:</b> W dniach 1 - 3 Listopada</div>
        </Item>
        <Item>
          <AnnouncementTitle>237 / 2019: Uwagi i tymczasowe przeniesienie przystanku OPOLSKA ESTAKADA w kierunku Bronowic M. / Azorów.</AnnouncementTitle>
          <div><b>Dotyczy linii:</b> 132, 138, 169, 172, 217, 247,  917 .</div>
          <div><b>Obowiązuje:</b> Od 25 października 2019 (piątek) od ok. 19:00 do odwołania przez Główną Dyspozytornię Ruchu MPK (zakończenie przewidywane w nocy 27 / 28 października 2019)</div>
        </Item>
        <Item>
          <AnnouncementTitle>236 / 2019: Remont nawierzchni na peronie autobusowym. Tymczasowe przeniesienie przystanku BRONOWICE WIADUKT w kierunku Bronowickiej.</AnnouncementTitle>
          <div><b>Dotyczy linii:</b> 139, 172, 208, 601, 664</div>
          <div><b>Obowiązuje:</b> Od dnia 28 października 2019 roku (poniedziałek) od ok. godz. 8:00 do odwołania przez Główną Dyspozytornię Ruchu MPK</div>
        </Item>
        <Item>
          <AnnouncementTitle>235 / 2019: 4. etap przebudowy ulicy Myślenickiej, Przywrócenie ruchu na odcinku – od ul. Szybisko do ul. Sawiczewskich</AnnouncementTitle>
          <div><b>Dotyczy linii:</b> 135, 214, 215, 225, 254, 714, 735, 754, 915</div>
          <div><b>Obowiązuje:</b> Od dnia 26 października 2019 roku (sobota)</div>
        </Item>
        <Item>
          <AnnouncementTitle>234 / 2019: Remont nawierzchni chodnika na ul. Walerego Sławka. Tymczasowe przeniesienie przystanku WOLA DUCHACKA w kierunku zajezdni Wola Duchacka.</AnnouncementTitle>
          <div><b>Dotyczy linii:</b> 164, 169, 174, 179, 184</div>
          <div><b>Obowiązuje:</b> Od dnia 23 października 2019 roku (środa) od ok. godz. 8:00 do odwołania przez Główną Dyspozytornię Ruchu MPK</div>
        </Item>
        <Item>
          <Button type="primary" style={{ margin: '0 auto' }}>Zobacz więcej</Button>
        </Item>
      </List>
    </Card>
    </>
  )
}

export default Dashboard;