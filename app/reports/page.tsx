'use client';
import { useState } from 'react';

export default function ReportsPage() {
  const [report, setReport] = useState('');

  const submitReport = () => {
    // In a real app, this would send to your database.
    // For now, we simulate adding to localStorage for the 'Logs' page to read.
    const existingLogs = JSON.parse(localStorage.getItem('incidentLogs') || '[]');
    localStorage.setItem('incidentLogs', JSON.stringify([...existingLogs, { id: Date.now(), text: report }]));
    setReport('');
    alert('Report Submitted to Command Logs');
  };

  return (
    <main className="page-container">
      <div className="glass-effect" style={{ width: '80%', maxWidth: '600px', padding: '40px' }}>
        <h1 style={{ marginBottom: '20px' }}>FILE INCIDENT REPORT</h1>
        <textarea 
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder="Enter incident details..."
          style={{ width: '100%', height: '150px', background: 'rgba(0,0,0,0.3)', border: '1px solid #334', padding: '15px', color: '#fff', borderRadius: '8px' }}
        />
        <button onClick={submitReport} style={{ marginTop: '20px', width: '100%', padding: '15px', background: '#2563eb', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          SUBMIT TO COMMAND
        </button>
      </div>
    </main>
  );
}