import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StarBackground from './components/StarBackground';
import Home from './pages/Home';
import Tribute from './pages/Tribute';

const App: React.FC = () => {
  return (
    <Router>
      <StarBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tribute" element={<Tribute />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
