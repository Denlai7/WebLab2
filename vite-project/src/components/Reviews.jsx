import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/21/comments');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setComments(await res.json());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="reviews">
      <h2>Reviews</h2>
      {loading && <p>Loading…</p>}
      {error && <p>Could not load reviews: {error}</p>}
      {comments.map((c) => (
        <article key={c.id}>
          <h3>{c.name}</h3>
          <p>{c.body}</p>
          <small>{c.email}</small>
        </article>
      ))}
    </section>
  );
}

export default Reviews;