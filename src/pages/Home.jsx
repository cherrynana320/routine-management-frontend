import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import TabsContent from '../routes/Home/Manage/TabsContent';
import SearchBox from '../components/SearchBox';

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');

  const handleMenuSelect = (e) => {
    setSelectedMenu(e.key);
  };

  return (
    <MainLayout selectedMenu={selectedMenu} onMenuSelect={handleMenuSelect}>
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
    </MainLayout>
  );
};

export default Home;
