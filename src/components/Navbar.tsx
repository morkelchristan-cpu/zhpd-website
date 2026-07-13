'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  // Updated list with 'Reports' included
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Divisions', path: '/divisions' },
    { name: 'Command', path: '/command' },
    { name: 'Roster', path: '/roster' },
    { name: 'AI', path: '/ai' },
    { name: 'Reports', path: '/reports' },
    { name: 'Logs', path: '/logs' }
  ];

  return (
    <nav className="glass-effect" style={{ 
      position: 'fixed', 
      top: '20px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      padding: '12px 35px', 
      display: 'flex', 
      gap: '25px', 
      zIndex: 1000, 
      borderRadius: '50px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      {links.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link 
            key={link.name} 
            href={link.path} 
            style={{ 
              textDecoration: 'none', 
              color: isActive ? '#fff' : '#94a3b8',
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em',
              transition: 'all 0.3s ease',
              fontWeight: isActive ? '600' : '400'
            }}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}