const API =
  (typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_API_URL : 'http://backend:3000') || '';


async function request(path: string, opts: any = {}) {
  const res = await fetch(API + path, opts);

  // Throw if HTTP error
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || 'API Error');
  }

  // Parse JSON if content-type includes json
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return res.json();
  }

  // Otherwise return text
  return res.text();
}

export default {
  register: (data: any) =>
    request('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  login: (data: any) =>
    request('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  getPosts: () => request('/posts'),
  createPost: (data: any, token?: string) =>
    request('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(data),
    }),
  updatePost: (id: number, data: any) =>
    request(`/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  deletePost: (id: number) =>
    request(`/posts/${id}`, { method: 'DELETE' }),
};
