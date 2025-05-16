import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ConstructionCalculator from './pages/ConstructionCalculator';
import RecentProjects from './pages/RecentProjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<ConstructionCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;