import Navbar from '@/src/components/Navbar';

export default function RosterPage() {
  return (
    <main>
      <Navbar />
      <div style={{ padding: '0 40px' }}>
        <h1 style={{ marginBottom: '30px' }}>Department Resources</h1>
        <p style={{ marginBottom: '20px' }}>Access official personnel records and procedural documentation.</p>
        {/* Your content blocks here */}
      </div>
    </main>
  );
}