import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children, selectedMenu, onMenuSelect }) => {
  return (
    <Layout
      style={{
        height: '100vh',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        padding: '0',
      }}
    >
      <AppHeader />
      <Layout
        style={{
          flex: 1,
          display: 'flex',
        }}
      >
        <Sidebar onMenuSelect={onMenuSelect} />
        <Layout
          style={{
            flex: 1,
            flexDirection: 'column',
            marginBottom: '50px',
            marginRight: '150px',
            borderRadius: '0px 0px 8px 0px',
            backgroundColor: '#ffffff',
            boxShadow: '4px 0 15px rgba(0, 0, 0, 0.3)', // 왼쪽에 그림자 추가
            paddingLeft: '2px',
          }}
        >
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
