import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '40px', 
      padding: '20px',
      width: '100%',
      position: 'fixed', // Keeps the nav at the top
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
      <Link href="/divisions" style={{ textDecoration: 'none', color: 'inherit' }}>Divisions</Link>
      <Link href="/roster" style={{ textDecoration: 'none', color: 'inherit' }}>Roster & Docs</Link>
      <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>
    </nav>
  );
}