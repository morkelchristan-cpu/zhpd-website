'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. SECURE SESSION TERMINATION
    // Remove all persistent tokens or user data stored in the browser
    localStorage.removeItem('user_session');
    localStorage.removeItem('user_role');
    
    // Optional: If you use cookies, you would clear them here via an API call
    
    // 2. IMMEDIATE REDIRECT
    // Force the browser to refresh the state and move to the login page
    router.push('/login');
    
    // Force a reload if necessary to clear any lingering client-side state
    window.location.reload();
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
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)', zIndex: 1000 
    }}>
      <div style={{ flex: 1 }} />
      
      {/* Central Navigation Links */}
      <div style={{ display: 'flex', gap: '30px' }}>
        {links.map((l) => (
          <Link key={l.name} href={l.path} style={{ 
            color: '#94a3b8', textDecoration: 'none', fontSize: '0.75rem', 
            textTransform: 'uppercase', letterSpacing: '0.2em', transition: 'color 0.3s' 
          }}>
            {l.name}
          </Link>
        ))}
      </div>

      {/* Logout Action */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleLogout} 
          style={{ 
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
          onMouseOver={(e) => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.color = '#fff'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ef4444'; }}
        >
          LOGOUT
        </button>
      </div>
    </nav>
  );
}