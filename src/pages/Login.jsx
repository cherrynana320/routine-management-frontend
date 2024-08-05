import React from 'react';
import { Button } from 'antd';
import { auth, googleProvider } from '/firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user); // 로그인 성공 시 사용자 정보
      })
      .catch((error) => {
        console.error(error); // 오류 처리
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Login</h1>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  );
};

export default Login;
