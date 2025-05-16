import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Landing';
import ConstructionCostCalculator from './components/main';
import Recent from './pages/recent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<ConstructionCostCalculator />} />
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </Router>
  );
}

export default App; 