import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashBoard from './DashBoard';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default Router;
