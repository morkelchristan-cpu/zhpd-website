'use client';
import { useSession, signIn } from 'next-auth/react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>Authenticating...</div>;
  }

  if (!session) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', color: 'white' }}>
        <h1>ZHPD Portal</h1>
        <button 
          onClick={() => signIn('discord')} 
          style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer' }}
        >
          Login with Discord
        </button>
      </div>
    );
  }

  return <>{children}</>;
}