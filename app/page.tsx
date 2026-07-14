'use client';
import { useState } from 'react';
import Navbar from '../src/components/Navbar';

export default function HomePage() {
  const [reportText, setReportText] = useState('');

  return (
    <main>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section id="home" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '4rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>LSPD Portal</h1>
      </section>

      {/* 2. ABOUT MODULE */}
      <section id="about" className="glass-panel" style={{ minHeight: '80vh', padding: '100px 40px' }}>
        <h2>ABOUT THE LSPD</h2>
        <p>Dedicated to serving and protecting the citizens of Los Santos with integrity and honor.</p>
      </section>

      {/* 3. DIVISION HIERARCHY */}
      <section id="divisions" style={{ padding: '100px 40px' }}>
        <h2>DIVISION HIERARCHY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {['CID', 'S.W.A.T', 'Air One', 'HPU', 'HR', 'IA'].map(div => (
            <div key={div} className="glass-panel" style={{ padding: '30px' }}><h3>{div}</h3></div>
          ))}
        </div>
      </section>

      {/* 4. COMMAND STRUCTURE */}
      <section id="command" className="glass-panel" style={{ minHeight: '80vh', padding: '100px 40px' }}>
        <h2>COMMAND STRUCTURE</h2>
        {/* Hierarchical tree layout goes here */}
      </section>

      {/* 5. ROSTER & DOCUMENTATION */}
      <section id="roster" className="glass-panel" style={{ minHeight: '80vh', padding: '100px 40px' }}>
        <h2>OFFICER ROSTER</h2>
        {/* Table component goes here */}
      </section>

      {/* 6. REPORTING PORTAL */}
      <section id="reports" className="glass-panel" style={{ minHeight: '80vh', padding: '100px 40px' }}>
        <h2>TACTICAL REPORTS</h2>
        <textarea 
          value={reportText} 
          onChange={(e) => setReportText(e.target.value)} 
          style={{ width: '100%', height: '150px', background: 'transparent', color: '#fff', border: '1px solid #334' }}
        />
        <button onClick={() => alert('Report Submitted')}>SUBMIT SECURE REPORT</button>
      </section>

      {/* 7. LOGS (Gated Access) */}
      <section id="logs" className="glass-panel" style={{ minHeight: '80vh', padding: '100px 40px' }}>
        <h2>COMMAND LOGS</h2>
        <p>Access Gated: Command Personnel Only</p>
      </section>
    </main>
  );
}