import React from 'react';
import { Button } from 'antd';
import { auth } from '/firebase';
import { signOut } from 'firebase/auth';

function Home() {
  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful');
        localStorage.removeItem('userToken'); // 예시: 로컬 스토리지에서 토큰 제거
        sessionStorage.clear(); // 예시: 세션 스토리지 클리어
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <Button onClick={handleLogout}>log out</Button>
    </div>
  );
}

export default Home;
