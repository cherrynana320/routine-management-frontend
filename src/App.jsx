// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import '/src/styles/global.css'; // 글로벌 스타일을 import 합니다.

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      {/* 기본적으로 /login으로 리다이렉트 */}
    </Routes>
  </Router>
);

export default App;
