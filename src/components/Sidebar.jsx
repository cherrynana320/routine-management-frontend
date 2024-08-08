import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AppstoreAddOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({ onMenuSelect }) => (
  <Sider
    width={80} // 사이드바 폭을 줄입니다
    className="site-layout-background"
    style={{
      borderRadius: '0 0 0px 8px',
      marginLeft: '150px',
      marginBottom: '50px',
      boxShadow: '-8px 4px 15px rgba(0, 0, 0, 0.3)', // 왼쪽과 아래에만 그림자 보이게
    }}
  >
    <Menu
      mode="inline"
      defaultSelectedKeys={['home']}
      style={{
        height: '100%',

        textAlign: 'center',
      }}
      onClick={onMenuSelect}
    >
      <Menu.Item
        key="home"
        icon={<HomeOutlined style={{ fontSize: '24px', padding: '12px' }} />} // 아이콘 크기 24px로 증가
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Menu.Item
        key="items"
        icon={<AppstoreAddOutlined style={{ fontSize: '24px' }} />} // 아이콘 크기 24px로 증가
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      />
    </Menu>
  </Sider>
);

export default Sidebar;
