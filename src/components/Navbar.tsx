import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      position: 'fixed', top: 0, width: '100%', padding: '20px 40px', 
      background: 'rgba(8, 17, 31, 0.95)', backdropFilter: 'blur(15px)',
      borderBottom: '1px solid #1E3A5F', display: 'flex', justifyContent: 'space-between',
      zIndex: 1000, alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' }}>ZHPD PORTAL</div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/divisions" style={{ color: 'white', textDecoration: 'none' }}>Divisions</Link>
        <Link href="/roster" style={{ color: 'white', textDecoration: 'none' }}>Roster & Docs</Link>
        <a href="YOUR_DISCORD_LINK" target="_blank" style={{ color: '#D4AF37', textDecoration: 'none' }}>Discord</a>
      </div>
    </nav>
  );
}