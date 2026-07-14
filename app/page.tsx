'use client';
import { useState } from 'react';
import Navbar from '../src/components/Navbar';

export default function HomePage() {
  const [reportText, setReportText] = useState('');

  const submitReport = () => {
    const logs = JSON.parse(localStorage.getItem('incidentLogs') || '[]');
    localStorage.setItem('incidentLogs', JSON.stringify([...logs, { id: Date.now(), text: reportText }]));
    setReportText('');
    alert('Report submitted.');
  };

  return (
    <main>
      <Navbar />
      <section id="home" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '4rem', letterSpacing: '0.2em' }}>LSPD PORTAL</h1>
      </section>

      {/* Reports Section Example */}
      <section id="reports" style={{ minHeight: '80vh', padding: '100px 40px' }}>
        <div className="glass-effect" style={{ padding: '60px', maxWidth: '800px', margin: 'auto' }}>
          <h2>TACTICAL REPORTS</h2>
          <textarea value={reportText} onChange={(e) => setReportText(e.target.value)} style={{ width: '100%', height: '100px', background: 'transparent', color: '#fff' }} />
          <button onClick={submitReport}>SUBMIT</button>
        </div>
      </section>
      
      {/* Add your other sections here following the same pattern */}
    </main>
  );
}