'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  const links = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Divisions', path: '/#divisions' },
    { name: 'Jurisdiction', path: '/#jurisdiction' },
    { name: 'Roster', path: '/#roster' },
    { name: 'AI', path: '/ai' },
    { name: 'Reports', path: '/#reports' },
    { name: 'Logs', path: '/logs' }
  ];

  return (
    <nav style={{ 
      position: 'fixed', top: 0, width: '100%', padding: '20px 40px', 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)', zIndex: 1000 
    }}>
      {/* User Display (Top Left) */}
      <div style={{ color: '#fff', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {session ? `Welcome, ${session.user?.name}` : 'LSPD TERMINAL'}
      </div>

      {/* Nav Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {links.map((l) => (
          <Link key={l.name} href={l.path} style={{ 
            color: '#94a3b8', textDecoration: 'none', fontSize: '0.70rem', 
            textTransform: 'uppercase', letterSpacing: '0.2em' 
          }}>
            {l.name}
          </Link>
        ))}
      </div>

      {/* Auth Control (Top Right) */}
      {session ? (
        <button onClick={() => signOut()} style={{ 
          background: 'transparent', border: '1px solid #ef4444', 
          color: '#ef4444', padding: '6px 16px', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' 
        }}>
          LOGOUT
        </button>
      ) : (
        <button onClick={() => signIn('discord')} style={{ 
          background: 'transparent', border: '1px solid #3b82f6', 
          color: '#3b82f6', padding: '6px 16px', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' 
        }}>
          LOGIN WITH DISCORD
        </button>
      )}
    </nav>
  );
}