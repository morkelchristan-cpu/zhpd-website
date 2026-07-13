import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      position: 'fixed', top: 0, width: '100%', padding: '20px 40px', 
      background: 'rgba(8, 17, 31, 0.8)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold', letterSpacing: '2px' }}>ZHPD</div>
      {/* This centers the links */}
      <div style={{ display: 'flex', gap: '40px', flexGrow: 1, justifyContent: 'center' }}>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/divisions" className="nav-link">Divisions</Link>
        <Link href="/roster" className="nav-link">Roster & Docs</Link>
        <Link href="/about" className="nav-link">About Us</Link>
      </div>
      <a href="YOUR_DISCORD_LINK" target="_blank" style={{ color: '#D4AF37', textDecoration: 'none' }}>Discord</a>
    </nav>
  );
}