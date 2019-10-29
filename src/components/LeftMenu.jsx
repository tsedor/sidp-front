import React from 'react';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const menuItems = [{
  id: 1,
  path: '/',
  icon: 'home',
  text: 'Strona Główna'
},{
  id: 2,
  path: '/schedule',
  icon: 'calendar',
  text: 'Grafik'
},{
  id: 3,
  path: '/announcement',
  icon: 'file-text',
  text: 'Komunikaty'
},{
  id: 4,
  path: '/messages',
  icon: 'message',
  text: 'Wiadomości'
},{
  id: 5,
  path: '/settings',
  icon: 'setting',
  text: 'Ustawienia'
},]

const LeftMenu = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <h1>Logo</h1>
      <Menu theme="dark" defaultSelectedKeys={['1']}>
      {menuItems.map(item => (
        <Menu.Item key={item.id}>
          <Link to={item.path}>
            <Icon type={item.icon} />
            <span>{item.text}</span>
          </Link>
        </Menu.Item>
      ))}
      </Menu>
    </Sider>
  )
}

export default LeftMenu;