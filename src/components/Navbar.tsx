'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user_session');
    router.push('/login');
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
    <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', zIndex: 1000 }}>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: '30px' }}>
        {links.map(l => <Link key={l.name} href={l.path} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{l.name}</Link>)}
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={handleLogout} style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer' }}>LOGOUT</button>
      </div>
    </nav>
  );
}