import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => (
  <Sider
    width={160}
    className="site-layout-background"
    style={{
      borderRadius: '0 0 0px 8px',
      marginLeft: '50px',
      marginBottom: '50px',
      overflow: 'hidden',
    }}
  >
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
