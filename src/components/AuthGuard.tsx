'use client';
import { useSession, signIn } from 'next-auth/react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  // If loading, show a better indicator
  if (status === 'loading') return <div style={{ color: 'white', padding: '20px' }}>Authenticating...</div>;
  
  // If unauthenticated, show the button
  if (status === 'unauthenticated') {
    return (
      <div style={{ textAlign: 'center', marginTop: '200px' }}>
        <h1>Access Required</h1>
        <button 
          onClick={() => signIn('discord')}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Login with Discord
        </button>
      </div>
    );
  }

  // If authenticated, render children
  return <>{children}</>;
}