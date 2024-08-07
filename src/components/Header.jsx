import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const AppHeader = () => (
  <Header
    style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#176BFF',
      padding: '0 20px',
      borderRadius: '8px 8px 0 0',
      margin: '50px 50px 0 50px',
    }}
  >
    <div style={{ color: '#fff', fontSize: '20px' }}>Routine Management</div>
  </Header>
);

export default AppHeader;
