'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} style={{ 
      textDecoration: 'none', 
      color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.8)',
      fontWeight: isActive ? 700 : 500,
      position: 'relative',
      paddingBottom: '4px'
    }}>
      {children}
      {isActive && <span style={{
        content: '""',
        position: 'absolute',
        left: 0, bottom: 0,
        width: '100%', height: '2px',
        background: '#3b82f6', /* Blue underline for active */
        borderRadius: '2px'
      }}></span>}
    </Link>
  );
};

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
      gap: '50px',
      padding: '16px 40px',
      width: 'max-content',
      zIndex: 1000,
      margin: 0 // Crucial: prevent it from moving
    }}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/divisions">Divisions</NavLink>
      <NavLink href="/roster">Roster & Docs</NavLink>
      <NavLink href="/about">About Us</NavLink>
      <button 
        onClick={() => signOut()}
        style={{ 
          background: 'rgba(255, 77, 77, 0.1)',
          border: '1px solid #ff4d4d', 
          color: '#ff4d4d', 
          padding: '8px 20px', 
          cursor: 'pointer',
          borderRadius: '8px',
          fontWeight: 600,
          marginLeft: '30px',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = '#ff4d4d'; e.currentTarget.style.color = '#fff'; }}
        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 77, 77, 0.1)'; e.currentTarget.style.color = '#ff4d4d'; }}
      >
        Logout
      </button>
    </nav>
  );
}