import { useParams } from 'react-router-dom';
import './ArticleDetail.css';

function ArticleDetail({ articles }) {
  let { id } = useParams();
  const article = articles[parseInt(id, 10)];

  if (!article) {
    return <div>Loading article...</div>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.publishedAt}</p>
      <p>{article.content}</p>
      <p>Source: {article.source.name}</p>
    </article>
  );
}

export default ArticleDetail;
