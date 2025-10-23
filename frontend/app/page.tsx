'use client';
import { useState, useEffect } from 'react';
import api from '../lib/api';
import Link from 'next/link';
import { useAuth } from './context/AuthContext';

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const { loggedIn } = useAuth(); 
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    const data = await api.getPosts();
    setPosts(data);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    await api.deletePost(id);
    fetchPosts();
  };

  if (!loggedIn) {
    return (
      <div className="welcome-container">
        <h1>Welcome to My Blog App</h1>
        <p>Please <Link href="/login">login</Link> or <Link href="/register">register</Link> to see the blog posts.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Blog Posts</h1>
      <Link href="/create-post">
        <button className="btn-create">Add New Post</button>
      </Link>
      <table className="blog-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.author?.name || 'Unknown'}</td>
              <td>{post.content.slice(0, 100)}{post.content.length > 100 ? '...' : ''}</td>
              <td>
                <Link href={`/create-post/${post.id}`}>
                  <button className="btn-edit">Edit</button>
                </Link>
                <button className="btn-delete" onClick={() => handleDelete(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
