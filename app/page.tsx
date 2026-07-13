export default function HomePage() {
  return (
    <main style={{ scrollBehavior: 'smooth' }}>
      
      {/* SECTION 1: HERO */}
      <section id="home" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/logo.png" alt="LSPD Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '3.5rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>LSPD Portal</h1>
        <p style={{ color: '#64748b' }}>Scroll down to access tactical systems</p>
      </section>

      {/* SECTION 2: DIVISIONS (Embed your content here) */}
      <section id="divisions" className="page-container" style={{ minHeight: '100vh', padding: '100px 40px' }}>
        <div className="glass-effect" style={{ width: '100%', maxWidth: '800px', padding: '40px' }}>
          <h2>DEPARTMENT DIVISIONS</h2>
          <p>CID, S.W.A.T, Air One, HPU, HR, IA</p>
        </div>
      </section>

      {/* SECTION 3: REPORTS/LOGS (Continue pattern for other sections) */}
      <section id="reports" className="page-container" style={{ minHeight: '100vh', padding: '100px 40px' }}>
         <div className="glass-effect" style={{ width: '100%', maxWidth: '800px', padding: '40px' }}>
          <h2>TACTICAL REPORTS</h2>
          {/* Your Reports Form Component */}
        </div>
      </section>
    </main>
  );
}