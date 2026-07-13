import Navbar from '@/src/components/Navbar';

export default function AIPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '40px', display: 'flex', justifyContent: 'center' }}>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '20px', width: '90%', maxWidth: '1100px' }}>
        
        {/* Sidebar Status */}
        <div className="glass-effect" style={{ padding: '30px' }}>
          <h3>AI SYSTEM STATUS</h3>
          <p style={{ color: '#94a3b8' }}>Neural Link: <span style={{ color: '#2563eb' }}>ACTIVE</span></p>
          <p style={{ color: '#94a3b8' }}>Core Stability: <span style={{ color: '#2563eb' }}>98%</span></p>
        </div>

        {/* AI Interaction Area */}
        <div className="glass-effect" style={{ padding: '40px' }}>
          <h1 style={{ marginBottom: '10px' }}>TACTICAL COMMAND AI</h1>
          <p style={{ marginBottom: '30px', color: '#94a3b8' }}>Input command parameters for tactical analysis.</p>
          
          <div className="glass-effect" style={{ padding: '5px', display: 'flex', marginBottom: '20px' }}>
            <input placeholder="Awaiting input..." style={{ width: '100%', background: 'none', border: 'none', padding: '15px', color: '#fff', outline: 'none' }} />
            <button style={{ background: '#2563eb', border: 'none', padding: '0 25px', borderRadius: '8px', cursor: 'pointer' }}>EXECUTE</button>
          </div>

          <div className="glass-effect" style={{ padding: '20px', minHeight: '200px', background: 'rgba(0,0,0,0.2)' }}>
            <p style={{ color: '#64748b' }}>AI Response terminal waiting for input...</p>
          </div>
        </div>
      </div>
    </main>
  );
}