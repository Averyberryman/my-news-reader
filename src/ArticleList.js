import React from 'react';
import Article from './Article';
import './ArticleList.css'

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
