import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import WithAuth from '../HOC/WithAuth';
import LeftMenu from '../LeftMenu';
import { StyledContent, StyledHeader, StyledLayout, StyledSiteContent } from './Main.styled';
import SiteFooter from '../Footer';
import Dashboard from '../Dashboard/Dashboard';
import Schedule from '../Shedule/Schedule';
import Messages from '../Messages/Messages';
import Announcement from '../Announcement/Announcement';

const Main = () => {
  return (
    <main>
      <StyledLayout>
        <LeftMenu />
        <Layout>
          <StyledHeader>dasdas</StyledHeader>
          <StyledContent>
            <Breadcrumb>
              <Breadcrumb.Item>Strona główna</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <StyledSiteContent>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/announcement" component={Announcement} />
                <Route path="/messages" component={Messages} />
              </Switch>
            </StyledSiteContent>
          </StyledContent>
          <SiteFooter />
        </Layout>
      </StyledLayout>
    </main>
  )
}

export default WithAuth(Main);