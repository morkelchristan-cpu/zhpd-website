'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function Navbar() {
  const pathname = usePathname();
  
  // Updated list includes 'AI'
  const navItems = ['Home', 'Divisions', 'Command', 'Roster', 'AI'];
  
  return (
    <nav className="glass-effect" style={{ 
      position: 'fixed', 
      top: '25px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      padding: '15px 40px', 
      display: 'flex', 
      gap: '30px', 
      zIndex: 1000
    }}>
      {navItems.map((item) => {
        const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
        const isActive = pathname === href;
        return (
          <Link key={item} href={href} style={{ 
            textDecoration: 'none', 
            color: isActive ? '#fff' : '#aaa',
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em',
            transition: 'color 0.3s'
          }}>
            {item}
          </Link>
        );
      })}
      <button onClick={() => signOut()} style={{ 
        background: 'none', border: 'none', color: '#ff4d4d', 
        fontSize: '0.8rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.15em' 
      }}>
        Logout
      </button>
    </nav>
  );
}