import React, { useState } from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import Sidebar from '../components/Sidebar';
import TabsContent from '../components/TabsContent';

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');

  const handleMenuSelect = (e) => {
    setSelectedMenu(e.key);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundColor: '#F5F5F5',
        display: 'flex',
      }}
    >
      <AppHeader />
      <Layout
        style={{
          flex: 1,
          display: 'flex',
        }}
      >
        <Sidebar onMenuSelect={handleMenuSelect} />
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
          {selectedMenu === 'home' ? (
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
              }}
            >
              <h1>Home</h1>
            </div>
          ) : selectedMenu === 'items' ? (
            <>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                  borderRadius: '8px',
                }}
              >
                <h1>Hi Lina! 2024</h1>
                <p>
                  This is a new section added between the header and the tabs
                  content.
                </p>
              </div>
              <TabsContent />
            </>
          ) : null}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
