function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading ... </h1>;

  const commentBlock = (
    <div className="comments">
      <h3>Comments {comments.length}</h3>
      <ul>
        {comments.map((comment, idx) => (
          <li key={idx}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1>{title.toLowerCase()}</h1>
      <p>{body}</p>

      {showComments && commentBlock}
    </div>
  );
}

export default App;
