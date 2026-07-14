'use client';
import { useState } from 'react';

export default function HomePage() {
  const sections = [
    { id: 'about', title: 'About the LSPD', content: 'Dedicated to serving and protecting the citizens of Los Santos with integrity and honor.' },
    { id: 'divisions', title: 'Divisions', content: 'CID, S.W.A.T, Air One, HPU, HR, IA' },
    { id: 'command', title: 'Command Operations', content: 'Strategic oversight and tactical management.' },
    { id: 'roster', title: 'Officer Roster', content: 'Current active personnel directory.' },
    { id: 'ai', title: 'Tactical AI', content: 'Advanced AI assistance for field operations.' },
    { id: 'reports', title: 'Tactical Reports', content: 'FORM' }, // New trigger
    { id: 'logs', title: 'Incident Logs', content: 'Authorized command viewing only.' }
  ];

  const [reportText, setReportText] = useState('');

  const submitReport = () => {
    const logs = JSON.parse(localStorage.getItem('incidentLogs') || '[]');
    localStorage.setItem('incidentLogs', JSON.stringify([...logs, { id: Date.now(), text: reportText }]));
    setReportText('');
    alert('Report submitted to command logs.');
  };

  return (
    <main>
      <section id="home" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/logo.png" alt="Logo" style={{ width: '220px', marginBottom: '30px' }} />
        <h1 style={{ fontSize: '4rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>LSPD Portal</h1>
      </section>

      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="page-container" style={{ minHeight: '80vh', padding: '100px 40px' }}>
          <div className="glass-effect" style={{ width: '100%', maxWidth: '900px', padding: '60px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px', letterSpacing: '0.1em' }}>{sec.title}</h2>
            
            {sec.content === 'FORM' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <textarea 
                  value={reportText} onChange={(e) => setReportText(e.target.value)}
                  placeholder="Enter incident report details..."
                  style={{ width: '100%', height: '150px', background: 'rgba(0,0,0,0.3)', border: '1px solid #334', padding: '15px', color: '#fff', borderRadius: '8px' }}
                />
                <button onClick={submitReport} style={{ padding: '15px', background: '#2563eb', border: 'none', borderRadius: '8px', cursor: 'pointer', color: '#fff' }}>
                  SUBMIT REPORT
                </button>
              </div>
            ) : (
              <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>{sec.content}</p>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}