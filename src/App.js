import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import { getNews } from './apiCalls';
import Header from './Header'

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      const data = await getNews(searchTerm);
      setArticles(data.articles);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for news..."
        />
        <button onClick={fetchArticles}>Search</button>
        {error && <p>Error fetching articles: {error}</p>}
      </div>
      <Routes>
        <Route path="/" element={<ArticleList articles={articles} />} />
        <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
      </Routes>
    </Router>
  );
}

export default App;
