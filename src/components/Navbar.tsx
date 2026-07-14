'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Terminate Session
    localStorage.removeItem('user_session');
    
    // 2. Force Redirect to Login
    // Using window.location.href forces a full page reload, 
    // which is the most reliable way to clear client-side state.
    window.location.href = '/login';
  };

  const links = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Divisions', path: '/#divisions' },
    { name: 'Roster', path: '/#roster' },
    { name: 'AI', path: '/ai' },
    { name: 'Reports', path: '/#reports' },
    { name: 'Logs', path: '/logs' }
  ];

  return (
    <nav style={{ 
      position: 'fixed', top: 0, width: '100%', padding: '20px 40px', 
      display: 'flex', alignItems: 'center', justifyContent: 'center', // Changed to center
      background: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)', zIndex: 1000 
    }}>
      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '30px' }}>
        {links.map((l) => (
          <Link key={l.name} href={l.path} style={{ 
            color: '#94a3b8', textDecoration: 'none', fontSize: '0.75rem', 
            textTransform: 'uppercase', letterSpacing: '0.2em' 
          }}>
            {l.name}
          </Link>
        ))}
      </div>

      {/* Logout Button: Moved closer to the links by removing flex spacer */}
      <button 
        onClick={handleLogout} 
        style={{ 
          marginLeft: '40px', // Pulls button left, closer to the links
          background: 'transparent', 
          border: '1px solid #ef4444', 
          color: '#ef4444',
          padding: '6px 16px', 
          borderRadius: '4px', 
          fontSize: '0.7rem', 
          cursor: 'pointer', 
          textTransform: 'uppercase',
          transition: 'all 0.3s ease'
        }}
      >
        LOGOUT
      </button>
    </nav>
  );
}