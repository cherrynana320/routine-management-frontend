import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import HomeTab from './../routes/Home/Tabs/index';
import InventoryTab from './../routes/Inventory/Tabs/index';
import RoutineCreation from './../routes/Home/Create/RoutineCreation';

const Home = ({ user }) => {
  // user prop 받아오기
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [isCreatingRoutine, setIsCreatingRoutine] = useState(false);

  const handleOpenRoutineCreation = () => {
    setIsCreatingRoutine(true);
  };

  const handleCloseRoutineCreation = () => {
    setIsCreatingRoutine(false);
  };

  const handleMenuSelect = (e) => {
    setSelectedMenu(e.key);
    setIsCreatingRoutine(false);
  };

  return (
    <MainLayout
      selectedMenu={selectedMenu}
      onMenuSelect={handleMenuSelect}
      style={{
        backgroundColor: '#E9F3FF',
      }}
    >
      {selectedMenu === 'home' ? (
        !isCreatingRoutine ? (
          <>
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
              }}
            >
              <h1>Hi {user ? user.displayName : 'User'}! </h1>
              {/* 사용자 이름 표시 */}
            </div>
            <HomeTab onOpenRoutineCreate={handleOpenRoutineCreation} />
          </>
        ) : (
          <RoutineCreation onComplete={handleCloseRoutineCreation} />
        )
      ) : selectedMenu === 'items' ? (
        <>
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '8px',
            }}
          >
            <h1>Inventory</h1>
          </div>
          <InventoryTab />
        </>
      ) : null}
    </MainLayout>
  );
};

export default Home;
