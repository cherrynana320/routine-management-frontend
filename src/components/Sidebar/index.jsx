import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import './index.css';

const { Sider } = Layout;

const Sidebar = ({ onMenuSelect }) => (
  <Sider width={80} className="sidebar">
    <Menu
      mode="inline"
      defaultSelectedKeys={['home']}
      className="menu"
      onClick={onMenuSelect}
    >
      <Menu.Item
        key="home"
        icon={<HomeOutlined style={{ fontSize: '20px' }} />} // 아이콘 크기 24px로 증가
        className="menu-item"
      />
      <Menu.Item
        key="items"
        icon={<AppstoreAddOutlined style={{ fontSize: '20px' }} />} // 아이콘 크기 24px로 증가
        className="menu-item"
      />
    </Menu>
  </Sider>
);

export default Sidebar;
