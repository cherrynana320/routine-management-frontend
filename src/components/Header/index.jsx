// import React from 'react';
// import { Layout } from 'antd';

// const { Header } = Layout;

// const AppHeader = () => (
//   <Header
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       backgroundColor: '#176BFF',
//       padding: '0 20px',
//       borderRadius: '8px 8px 0 0',
//       margin: '50px 150px 0 150px',
//       boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.3)', // 그림자를 위쪽으로
//     }}
//   >
//     <div style={{ color: '#fff', fontSize: '15px' }}>Routine Management</div>
//   </Header>
// );

// export default AppHeader;

import React from 'react';
import { Layout } from 'antd';
import './index.css'; // CSS 파일 import

const { Header } = Layout;

const AppHeader = () => (
  <Header className="app-header">
    <div className="header-title">Routine Management</div>
  </Header>
);

export default AppHeader;
