// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function Navbar() {
  return (
    // Applied the glass-panel class for the aesthetic
    <nav className="glass-panel" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '50px', 
      padding: '15px 30px',
      width: '90%', // Centered but not full width for a premium feel
      maxWidth: '1200px',
      margin: '40px auto', // Margin for spacing below/above
      position: 'sticky',
      top: '20px', // Sticks slightly below the top
      zIndex: 100
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Home</Link>
      <Link href="/divisions" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Divisions</Link>
      <Link href="/roster" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Roster & Docs</Link>
      <Link href="/about" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>About Us</Link>
      <button 
        onClick={() => signOut()}
        style={{ 
          background: 'rgba(255, 77, 77, 0.1)', // Subtle red background
          border: '1px solid #ff4d4d', 
          color: '#ff4d4d', 
          padding: '6px 16px', 
          cursor: 'pointer',
          borderRadius: '8px',
          fontWeight: 600,
          marginLeft: '20px',
          transition: 'all 0.2s'
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = '#ff4d4d'; e.currentTarget.style.color = '#fff'; }}
        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 77, 77, 0.1)'; e.currentTarget.style.color = '#ff4d4d'; }}
      >
        Logout
      </button>
    </nav>
  );
}