// import React from 'react';
// import { Button } from 'antd';
// import { auth } from '/firebase';
// import { signOut } from 'firebase/auth';

// function Home() {
//   const handleLogout = async () => {
//     signOut(auth)
//       .then(() => {
//         console.log('Sign-out successful');
//         localStorage.removeItem('userToken'); // 예시: 로컬 스토리지에서 토큰 제거
//         sessionStorage.clear(); // 예시: 세션 스토리지 클리어
//         navigate('/login');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <p>Welcome to the home page!</p>
//       <Button onClick={handleLogout}>log out</Button>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import Sidebar from '../components/Sidebar';
import TabsContent from '../components/TabsContent';

const Home = () => (
  <Layout
    style={{ minHeight: '100vh', backgroundColor: '#F5F5F5' }} // Ensure full viewport height
  >
    <AppHeader />
    <Layout style={{ flex: 1, display: 'flex' }}>
      <Sidebar />
      <Layout
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '50px',
          marginRight: '50px',
          borderRadius: '0px 0px 8px 0px',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            height: '20%',
          }}
        >
          {/* Additional content or UI elements */}
          <h1>Hi Lina! 2024</h1>
          <p>
            This is a new section added between the header and the tabs content.
          </p>
        </div>

        <TabsContent />
      </Layout>
    </Layout>
  </Layout>
);

export default Home;
