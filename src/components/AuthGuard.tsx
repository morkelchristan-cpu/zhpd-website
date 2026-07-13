'use client';
import { useSession, signIn } from 'next-auth/react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  // If status is 'loading', show a brief message
  if (status === 'loading') return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Loading...</div>;

  // If unauthenticated, show the Login screen instead of hanging
  if (status === 'unauthenticated') {
    return (
      <div style={{ textAlign: 'center', marginTop: '200px', color: 'white' }}>
        <h1>ZHPD Portal</h1>
        <p>You must be logged in to access this site.</p>
        <button 
          onClick={() => signIn('discord')} // This triggers the Discord redirect
          style={{ 
            padding: '12px 24px', 
            fontSize: '16px', 
            cursor: 'pointer',
            backgroundColor: '#5865F2',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Login with Discord
        </button>
      </div>
    );
  }

  // If authenticated, show the site content
  return <>{children}</>;
}