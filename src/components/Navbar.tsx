'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function Navbar() {
  return (
    <nav className="glass-panel" style={{ 
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      padding: '15px 40px',
      width: 'max-content',
      zIndex: 1000
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Home</Link>
      <Link href="/divisions" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Divisions</Link>
      <Link href="/roster" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Roster & Docs</Link>
      <Link href="/about" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>About Us</Link>
      <button 
        onClick={() => signOut()}
        style={{ 
          background: 'transparent',
          border: '1px solid #ff4d4d', 
          color: '#ff4d4d', 
          padding: '6px 16px', 
          cursor: 'pointer',
          borderRadius: '8px',
          fontWeight: 600,
          marginLeft: '20px'
        }}
      >
        Logout
      </button>
    </nav>
  );
}