'use client';
import { useSession, signIn } from 'next-auth/react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  if (status === 'loading') return <div style={{ color: '#fff', textAlign: 'center', marginTop: '20vh' }}>Loading Secure Portal...</div>;

  if (status === 'unauthenticated') {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        fontFamily: 'sans-serif'
      }}>
        <div style={{
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)'
        }}>
          <h1 style={{ marginBottom: '10px', fontSize: '2rem' }}>ZHPD Command Access</h1>
          <p style={{ opacity: 0.7, marginBottom: '30px' }}>Authentication required for personnel portal.</p>
          <button 
            onClick={() => signIn('discord')}
            style={{
              padding: '12px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#5865F2',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s, background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Login via Discord
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}