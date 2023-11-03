import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="ArticleList">
      {articles.map((article, index) => (
        <Link to={`/articles/${index}`} key={index} className="ArticleList-item">
          <Article article={article} />
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
