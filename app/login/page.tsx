'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [callsign, setCallsign] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    localStorage.setItem('user_session', 'active');
    router.push('/'); // Send them to the main portal after login
  };

  return (
    <main style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617' }}>
      <div className="glass-card" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '20px' }}>LSPD ACCESS</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Enter Callsign / Badge ID" 
            value={callsign}
            onChange={(e) => setCallsign(e.target.value)}
            style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #334', background: 'transparent', color: '#fff' }}
          />
          <button type="submit" style={{ width: '100%', padding: '15px', background: '#3b82f6', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
            AUTHENTICATE
          </button>
        </form>
      </div>
    </main>
  );
}