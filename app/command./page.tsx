import Navbar from '@/src/components/Navbar';

export default function CommandPage() {
  const staff = [
    { role: 'Chief of Police', name: 'Cloudii' },
    { role: 'Assistant Chief', name: 'TBD' },
    { role: 'Captain', name: 'TBD' }
  ];

  return (
    <main className="animate-in" style={{ paddingTop: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div className="glass-panel" style={{ width: '90%', maxWidth: '800px' }}>
        <h2 style={{ textTransform: 'uppercase', marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
          Chain of Command
        </h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {staff.map((member) => (
            <div key={member.role} style={{ 
              background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px',
              display: 'flex', justifyContent: 'space-between' 
            }}>
              <span style={{ color: '#94a3b8', fontWeight: 600 }}>{member.role}</span>
              <span style={{ fontSize: '1.1rem' }}>{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}