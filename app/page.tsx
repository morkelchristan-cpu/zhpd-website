import Navbar from '@/src/components/Navbar';

export default function Home() {
  return (
    <main className="animate-in" style={{ minHeight: '100vh', paddingTop: '100px', padding: '100px 5%' }}>
      <Navbar />
      
      {/* Dashboard Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
        
        {/* Sidebar Module */}
        <div className="glass-panel" style={{ height: 'fit-content' }}>
          <h3 style={{ textTransform: 'uppercase', marginBottom: '20px' }}>Status</h3>
          <div style={{ color: '#94a3b8' }}>
            <p>System: <span style={{ color: '#2563eb' }}>Online</span></p>
            <p>Jurisdiction: <span style={{ color: '#fff' }}>Los Santos</span></p>
          </div>
        </div>

        {/* Main Hero Module */}
        <div className="glass-panel">
          <h1 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '10px' }}>
            ZeroHour Command
          </h1>
          <p style={{ color: '#94a3b8', marginBottom: '30px' }}>
            Centralized portal for departmental coordination, tactical deployments, and officer records.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={{ background: '#2563eb', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', color: '#fff' }}>
              View Active Units
            </button>
            <button style={{ background: 'transparent', border: '1px solid #334155', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', color: '#fff' }}>
              Access Dispatch
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}