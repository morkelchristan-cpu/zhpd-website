import Navbar from '@/src/components/Navbar';

export default function RosterPage() {
  return (
    <main className="fade-in" style={{ paddingTop: '120px' }}>
      <Navbar />
      <div className="glass-panel" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '20px' }}>Department Resources</h1>
        <p style={{ marginBottom: '40px' }}>Access official personnel records and procedural documentation.</p>
        
        <div className="glass-panel" style={{ marginBottom: '20px' }}>
          <h3>Official Roster (Google Sheets)</h3>
        </div>
        <div className="glass-panel">
          <h3>Global SOP</h3>
        </div>
      </div>
    </main>
  );
}