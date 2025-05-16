import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import ConstructionCalculator from './main';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<ConstructionCalculator />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;