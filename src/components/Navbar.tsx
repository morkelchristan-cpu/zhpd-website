'use client';
import Link from 'next/link';

export default function Navbar() {
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
      <div style={{ flex: 1 }} /> {/* Spacer */}
      <div style={{ display: 'flex', gap: '30px' }}>
        {links.map((link) => (
          <Link key={link.name} href={link.path} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            {link.name}
          </Link>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={() => window.location.href = '/login'} style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '5px 15px', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer', textTransform: 'uppercase' }}>Logout</button>
      </div>
    </nav>
  );
}