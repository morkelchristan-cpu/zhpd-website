'use client';
export default function HomePage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section id="home" style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '5rem', margin: 0 }}>LSPD PORTAL</h1>
      </section>
      
      <section id="reports" style={{ padding: '100px 20px', maxWidth: '800px', margin: 'auto' }}>
        <div className="glass-card">
          <h2>TACTICAL REPORTS</h2>
          <textarea style={{ width: '100%', height: '100px', background: 'transparent', border: '1px solid #334', borderRadius: '12px', color: '#fff', marginTop: '10px' }} />
          <button style={{ marginTop: '10px', padding: '10px 20px', background: '#3b82f6', border: 'none', borderRadius: '6px', color: '#fff' }}>SUBMIT</button>
        </div>
      </section>
    </main>
  );
}