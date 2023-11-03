import React from 'react';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import './App.css';
import mockData from './mockData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList articles={mockData.articles} />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
