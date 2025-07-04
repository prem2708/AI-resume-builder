import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ResumeBuilder from './components/ResumeBuilder';
import TemplatesPage from './components/TemplatesPage';
import ExamplesPage from './components/ExamplesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder" element={<ResumeBuilder />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/examples" element={<ExamplesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;