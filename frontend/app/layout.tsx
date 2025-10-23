import './globals.css';
import Header from './components/header';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

export const metadata = { title: 'Blog App', description: 'Next.js + NestJS Blog CRUD' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="container">
            <Header />
            <main>{children}</main>
            <footer>© 2025 My Blog App</footer>            
          </div>
          <Toaster position="top-right" reverseOrder={false} />
        </AuthProvider>
      </body>
    </html>
  );
}
