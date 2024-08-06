import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';

// 이 파일에서는 기본적인 라우터를 설정하고 라우팅을 관리
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* 기본적으로 /login으로 리다이렉트 */}
      </Routes>
    </Router>
  );
}

export default App;
