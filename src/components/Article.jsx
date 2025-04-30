
function Article({ title, image, alt, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>{content}</p>
      <a href="#" className="continues">continues...</a>
    </article>
  );
}

export default Article;