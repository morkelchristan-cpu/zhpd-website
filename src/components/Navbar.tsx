'use client';
import Link from 'next/link';

export default function Navbar() {
  const user = { discordName: 'Cloudii' }; // Replace with real auth state

  const links = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Divisions', path: '#divisions' },
    { name: 'Command', path: '#command' },
    { name: 'Roster', path: '#roster' },
    { name: 'AI', path: '/ai' },
    { name: 'Reports', path: '#reports' },
    { name: 'Logs', path: '#logs' }
  ];

  return (
    <>
      <div style={{ position: 'fixed', top: '20px', left: '20px', color: '#64748b', fontSize: '0.7rem', zIndex: 1001 }}>
        LOGGED IN: {user.discordName}
      </div>
      <nav className="glass-effect" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', padding: '12px 35px', display: 'flex', gap: '20px', zIndex: 1000, borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        {links.map((link) => (
          <Link key={link.name} href={link.path} style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.70rem', textTransform: 'uppercase', letterSpacing: '0.15em', transition: '0.3s' }}>
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
}