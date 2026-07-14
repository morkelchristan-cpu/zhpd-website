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
      position: 'fixed', top: 0, width: '100%', padding: '20px 0', 
      display: 'flex', alignItems: 'center', justifyContent: 'center', // Centering the whole bar
      background: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)',
      zIndex: 1000, margin: 0 // Removes default browser margins
    }}>
      {/* Container for Centered Items */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* User Name (Left of links) */}
        <div style={{ color: '#fff', fontSize: '0.70rem', textTransform: 'uppercase', marginRight: '20px' }}>
          {session ? `Welcome, ${session.user?.name}` : 'LSPD TERMINAL'}
        </div>

        {/* Navigation Links */}
        {links.map((l) => (
          <Link key={l.name} href={l.path} style={{ 
            color: '#94a3b8', textDecoration: 'none', fontSize: '0.70rem', 
            textTransform: 'uppercase', letterSpacing: '0.2em' 
          }}>
            {l.name}
          </Link>
        ))}

        {/* Auth Button (Right of links) */}
        {session ? (
          <button onClick={() => signOut()} style={{ 
            marginLeft: '20px', background: 'transparent', border: '1px solid #ef4444', 
            color: '#ef4444', padding: '6px 16px', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' 
          }}>
            LOGOUT
          </button>
        ) : (
          <button onClick={() => signIn('discord')} style={{ 
            marginLeft: '20px', background: 'transparent', border: '1px solid #3b82f6', 
            color: '#3b82f6', padding: '6px 16px', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer' 
          }}>
            LOGIN WITH DISCORD
          </button>
        )}
      </div>
    </nav>
  );
}