import React from 'react';
import ArticleList from './ArticleList'
import './App.css'
import './Header.css'
import mockData from './mockData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>News Articles</h1>
      </header>
      <main>
        <ArticleList articles={mockData.articles} />
      </main>
    </div>
  );
}

export default App;
