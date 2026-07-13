'use client';
import { useSession, signIn } from 'next-auth/react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'unauthenticated') {
    return (
      <div style={{ textAlign: 'center', marginTop: '200px' }}>
        <h1>ZHPD Portal Access</h1>
        <button onClick={() => signIn('discord')}>Login with Discord</button>
      </div>
    );
  }

  return <>{children}</>;
}