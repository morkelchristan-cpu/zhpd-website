import Navbar from '@/src/components/Navbar';
import RosterLinks from '@/src/components/RosterLinks';
import Divisions from '@/src/components/Divisions';

export default function RosterPage() {
  return (
    <main style={{ 
      paddingTop: '120px', 
      paddingLeft: '40px', 
      paddingRight: '40px', 
      maxWidth: '1000px', 
      margin: '0 auto' 
    }}>
      <Navbar />
      
      <header style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Department Resources</h1>
        <p style={{ color: '#94A3B8', fontSize: '1.2rem' }}>
          Access official personnel records and procedural documentation.
        </p>
      </header>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Active Documentation</h2>
        <RosterLinks />
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Department Divisions</h2>
        <Divisions />
      </section>
    </main>
  );
}