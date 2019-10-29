import React, { useEffect } from 'react';
import { Breadcrumb, Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { scheduleRequestStart } from '../../actions/schedule';
import WithAuth from '../HOC/WithAuth';
import LeftMenu from '../LeftMenu';
import { StyledContent, StyledHeader, StyledLayout, StyledSiteContent } from './Main.styled';
import SiteFooter from '../Footer';
import Dashboard from '../Dashboard/Dashboard';
import Schedule from '../Shedule/Schedule';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(scheduleRequestStart())
  }, [dispatch]);
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