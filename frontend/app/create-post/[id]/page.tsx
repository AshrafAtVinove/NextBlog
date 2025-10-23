'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import api from '../../../lib/api';

export default function EditPost() {
  const [form, setForm] = useState({ title: '', content: '' });
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await api.getPosts();
      const post = posts.find((p: any) => p.id === +id);
      if (post) setForm({ title: post.title, content: post.content });
    };
    fetchPost();
  }, [id]);

  const submit = async (e: any) => {
    e.preventDefault();
    await api.updatePost(+id, form);
    router.push('/');
  };

  return (
    <div className="form-container">
      <form onSubmit={submit} className="post-form">
        <h2>Edit Post</h2>

        <label htmlFor="title">Title</label>
        <input
          id="title"
          placeholder="Enter post title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          placeholder="Enter post content"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
          rows={8}
          required
        />

        <button type="submit" className="btn-submit">Update Post</button>
      </form>
    </div>
  );
}
