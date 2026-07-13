import Navbar from '@/src/components/Navbar';

export default function AIPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Navbar />
      <div className="glass-effect" style={{ width: '90%', maxWidth: '600px', padding: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px', textTransform: 'uppercase' }}>Tactical AI Assistant</h1>
        <div className="glass-effect" style={{ padding: '5px', display: 'flex', borderRadius: '12px' }}>
          <input placeholder="Querying AI..." style={{ width: '100%', background: 'none', border: 'none', padding: '15px', color: '#fff', outline: 'none' }} />
          <button style={{ background: '#2563eb', border: 'none', padding: '0 20px', borderRadius: '8px', cursor: 'pointer', color: '#fff' }}>SEND</button>
        </div>
      </div>
    </main>
  );
}