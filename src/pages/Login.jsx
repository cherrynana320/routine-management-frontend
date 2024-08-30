import React from 'react';
import { Button } from 'antd';
import { auth, googleProvider } from '/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import webLightRdCtnImg from '../assets/web_light_rd_ctn@1x.png'; // 이미지 파일 임포트

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      console.log(data.user); // 로그인 성공 시 사용자 정보
      navigate('/');
    } catch (erroor) {
      console.error(error); // 오류 처리
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Login</h1>
      <Button
        type="default"
        style={{
          border: 'none',
          background: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
        onClick={handleLogin} // 버튼 클릭 시 동작
      >
        <img src={webLightRdCtnImg} alt="Button Image" />
      </Button>
    </div>
  );
};

export default Login;
