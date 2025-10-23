// app/components/Header.tsx
'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { loggedIn, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header>
      <h1>Blog Application</h1>
      <nav>
        <Link href="/">Home</Link>
        {loggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
           
          </>
        )}
      </nav>
    </header>
  );
}
