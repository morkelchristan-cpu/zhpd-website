import Navbar from '@/src/components/Navbar';

export default function CommandPage() {
  return (
    <main style={{ paddingTop: '150px', paddingLeft: '20px', paddingRight: '20px' }}>
      <Navbar />
      <div className="glass-effect" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ marginBottom: '10px' }}>Command Structure</h1>
        <p style={{ opacity: 0.7, marginBottom: '30px' }}>Official departmental hierarchy.</p>
        
        <div style={{ display: 'grid', gap: '15px' }}>
          <div className="glass-effect" style={{ padding: '20px' }}>
            <h3>Chief of Police</h3>
            <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>Cloudii</p>
          </div>
          <div className="glass-effect" style={{ padding: '20px' }}>
            <h3>Assistant Chief</h3>
            <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>TBD</p>
          </div>
        </div>
      </div>
    </main>
  );
}