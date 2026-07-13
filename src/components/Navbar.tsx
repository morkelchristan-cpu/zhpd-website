'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav style={{ 
      position: 'fixed', 
      top: '25px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      backgroundColor: '#0a0a0c', 
      padding: '12px 40px', 
      borderRadius: '50px', 
      border: '1px solid #2d2d35', 
      display: 'flex', 
      gap: '40px', 
      zIndex: 1000,
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      {['Home', 'Divisions', 'Command', 'Roster'].map((item) => {
        const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
        const isActive = pathname === href;
        return (
          <Link key={item} href={href} style={{ 
            textDecoration: 'none', 
            color: isActive ? '#fff' : '#94a3b8', 
            fontSize: '0.85rem', 
            fontWeight: isActive ? 700 : 500,
            textTransform: 'uppercase', 
            letterSpacing: '0.15em',
            transition: 'color 0.3s'
          }}>
            {item}
          </Link>
        );
      })}
      <button onClick={() => signOut()} style={{ 
        background: 'transparent', border: 'none', color: '#ff4d4d', 
        fontSize: '0.85rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.15em' 
      }}>
        Logout
      </button>
    </nav>
  );
}