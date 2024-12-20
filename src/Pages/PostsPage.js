import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const postsPerPage = 10;

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(prevPosts => [...prevPosts, ...data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="posts_container">
      <h1 className="posts-title">Posts</h1>
      <ul className="posts_lists">
        {posts.map(post => (
          <li key={post.id} className="post_container">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="loader-container">{loading && <Loader />}</div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Posts;
