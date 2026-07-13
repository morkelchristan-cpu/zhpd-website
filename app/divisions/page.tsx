import Navbar from '@/src/components/Navbar';
import Link from 'next/link';

export default function DivisionsPage() {
  const divisions = ['Patrol', 'Traffic', 'SWAT', 'Detective', 'Training', 'IA', 'Air'];
  
  return (
    <main style={{ paddingTop: '150px', padding: '0 40px' }}>
      <Navbar />
      <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>Command Divisions</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
        {divisions.map((div) => (
          <Link href={`/divisions/${div.toLowerCase()}`} key={div} style={{ textDecoration: 'none' }}>
            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', transition: '0.3s' }}>
              <h2 style={{ margin: 0 }}>{div}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}