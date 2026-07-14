'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  // NOTE: Replace these placeholders with your actual Discord application details
  // from the Discord Developer Portal.
  const CLIENT_ID = '1526288087095705680';
  const REDIRECT_URI = encodeURIComponent('http://192.168.110.157:3000/api/auth/callback/discord');
  const DISCORD_AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=identify`;

  const handleDiscordLogin = () => {
    setLoading(true);
    window.location.href = DISCORD_AUTH_URL;
  };

  return (
    <main style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#020617' 
    }}>
      <div className="glass-card" style={{ 
        maxWidth: '400px', 
        width: '100%', 
        textAlign: 'center',
        padding: '48px' 
      }}>
        <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '16px' }}>LSPD ACCESS</h1>
        <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '0.9rem' }}>
          Secure Command & Control Portal. Authenticate via Discord to proceed.
        </p>
        
        <button 
          onClick={handleDiscordLogin} 
          disabled={loading}
          style={{ 
            width: '100%', 
            padding: '16px', 
            background: '#5865F2', 
            border: 'none', 
            borderRadius: '12px', 
            color: '#fff', 
            fontWeight: '600', 
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }}
        >
          {loading ? 'REDIRECTING...' : 'LOGIN WITH DISCORD'}
        </button>
      </div>
    </main>
  );
}