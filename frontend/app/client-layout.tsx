'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const loggedIn = useAuth();
  const router = useRouter();
  // Listen to storage events so multiple tabs sync
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <div className="container">
      <header>
        <h1>My Blog App</h1>
        <nav>
          <Link href="/">Home</Link>
          {loggedIn ? (
            <>
              <button className="btn-logout" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/register">Register</Link>
              <Link href="/login">Login</Link>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2025 My Blog App. All rights reserved.</footer>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
