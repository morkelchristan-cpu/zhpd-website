'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '40px', 
      padding: '20px',
      width: '100%',
      marginBottom: '60px', // Spacing below the navbar
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
      <Link href="/divisions" style={{ textDecoration: 'none', color: '#fff' }}>Divisions</Link>
      <Link href="/roster" style={{ textDecoration: 'none', color: '#fff' }}>Roster & Docs</Link>
      <Link href="/about" style={{ textDecoration: 'none', color: '#fff' }}>About Us</Link>
      <button 
        onClick={() => signOut()}
        style={{ 
          background: 'transparent', 
          border: '1px solid #ff4d4d', 
          color: '#ff4d4d', 
          padding: '6px 16px', 
          cursor: 'pointer',
          borderRadius: '5px',
          marginLeft: '20px'
        }}
      >
        Logout
      </button>
    </nav>
  );
}