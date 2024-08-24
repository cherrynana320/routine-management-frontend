import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import HomeTab from './../routes/Home/Tabs/index';
import InventoryTab from './../routes/Inventory/Tabs/index';

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');

  const handleMenuSelect = (e) => {
    setSelectedMenu(e.key);
  };

  return (
    <MainLayout selectedMenu={selectedMenu} onMenuSelect={handleMenuSelect}>
      {selectedMenu === 'home' ? (
        <>
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '8px',
            }}
          >
            <h1>Home</h1>
          </div>
          <HomeTab />
        </>
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
          </div>
          <InventoryTab />
        </>
      ) : null}
    </MainLayout>
  );
};

export default Home;
