import React from 'react';
import { Layout } from 'antd';
import WeekView from './components/WeekView';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
        className="site-layout-background"
      >
        <WeekView />
      </Content>
    </Layout>
  );
}

export default App;
