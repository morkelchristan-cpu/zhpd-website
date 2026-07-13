export default function HomePage() {
  const sections = [
    { id: 'about', title: 'About the LSPD', content: 'Dedicated to serving and protecting the citizens of Los Santos with integrity and honor.' },
    { id: 'divisions', title: 'Divisions', content: 'CID, S.W.A.T, Air One, HPU, HR, IA' },
    { id: 'command', title: 'Command Operations', content: 'Strategic oversight and tactical management.' },
    { id: 'roster', title: 'Officer Roster', content: 'Current active personnel directory.' },
    { id: 'ai', title: 'Tactical AI', content: 'Advanced AI assistance for field operations.' },
    { id: 'logs', title: 'Incident Logs', content: 'Authorized command viewing only.' }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section id="home" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/logo.png" alt="Logo" style={{ width: '220px', marginBottom: '30px' }} />
        <h1 style={{ fontSize: '4rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>LSPD Portal</h1>
      </section>

      {/* Dynamic Sections */}
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="page-container" style={{ minHeight: '80vh', padding: '100px 40px' }}>
          <div className="glass-effect" style={{ width: '100%', maxWidth: '900px', padding: '60px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px', letterSpacing: '0.1em' }}>{sec.title}</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>{sec.content}</p>
          </div>
        </section>
      ))}
    </main>
  );
}