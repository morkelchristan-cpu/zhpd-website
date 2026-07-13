import Navbar from '@/src/components/Navbar';
import RosterLinks from '@/src/components/RosterLinks';

export default function RosterPage() {
  return (
    <main style={{ paddingTop: '150px', padding: '0 40px', maxWidth: '800px', margin: '0 auto' }}>
      <Navbar />
      <h1 style={{ marginBottom: '10px' }}>Department Resources</h1>
      <p style={{ color: '#94A3B8', marginBottom: '40px' }}>Access official personnel records and procedural documentation.</p>
      <RosterLinks />
    </main>
  );
}