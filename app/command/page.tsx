import Navbar from '@/src/components/Navbar';

export default function CommandPage() {
  return (
    <main style={{ paddingTop: '150px' }}>
      <Navbar />
      <div className="animate-page-wrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px', borderBottom: '2px solid #3b82f6', display: 'block' }}>
          Chain of Command
        </h1>
        
        {/* Hierarchical Cards */}
        {[ { rank: 'Chief of Police', name: 'Cloudii' }, { rank: 'Assistant Chief', name: 'TBD' } ].map((staff, i) => (
          <div key={i} className="glass-panel" style={{ marginBottom: '20px', borderLeft: '5px solid #3b82f6' }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#94a3b8' }}>{staff.rank}</h2>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '5px 0 0 0' }}>{staff.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}