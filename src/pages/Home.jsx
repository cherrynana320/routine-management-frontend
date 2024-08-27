import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import HomeTab from './../routes/Home/Tabs/index';
import InventoryTab from './../routes/Inventory/Tabs/index';
import RoutineCreation from './../routes/Home/Create/RoutineCreation'; // Import RoutineCreation

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [isCreatingRoutine, setIsCreatingRoutine] = useState(false);

  const handleOpenRoutineCreation = () => {
    setIsCreatingRoutine(true); // 루틴 생성 모드로 전환
  };

  const handleCloseRoutineCreation = () => {
    setIsCreatingRoutine(false); // 루틴 생성 완료 시 원래 화면으로 돌아가기
  };

  const handleMenuSelect = (e) => {
    setSelectedMenu(e.key);
    setIsCreatingRoutine(false); // 메뉴 변경 시 루틴 생성 모드 종료
  };

  return (
    <MainLayout selectedMenu={selectedMenu} onMenuSelect={handleMenuSelect}>
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
              <h1>Home</h1>
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
            <h1>Hi Lina! 2024</h1>
          </div>
          <InventoryTab />
        </>
      ) : null}
    </MainLayout>
  );
};

export default Home;
