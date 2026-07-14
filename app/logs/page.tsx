'use client';
import { useEffect, useState } from 'react';

interface IncidentLog {
  id: number;
  text: string;
}

export default function LogsPage() {
  const [logs, setLogs] = useState<IncidentLog[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Architect's Note: Replace this boolean with your actual session/role check
  const isAdmin = true; 

  useEffect(() => {
    const data = localStorage.getItem('incidentLogs');
    if (data) {
      setLogs(JSON.parse(data));
    }
    setIsLoaded(true);
  }, []);

  const deleteReport = (id: number) => {
    const updated = logs.filter(l => l.id !== id);
    setLogs(updated);
    localStorage.setItem('incidentLogs', JSON.stringify(updated));
  };

  if (!isLoaded) return null;
  if (!isAdmin) return <div style={{ padding: '100px', color: '#ef4444' }}>Access Denied: Command Clearance Required.</div>;

  return (
    <div style={{ padding: '100px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '30px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Command Logs</h1>
      
      {logs.length === 0 ? (
        <p style={{ color: '#64748b' }}>No active reports pending.</p>
      ) : (
        logs.map((log) => (
          <div key={log.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '20px', 
            background: 'rgba(255,255,255,0.05)', 
            marginBottom: '10px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <span>{log.text}</span>
            <button 
              onClick={() => deleteReport(log.id)}
              style={{ background: '#ef4444', border: 'none', color: '#fff', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}
            >
              DELETE
            </button>
          </div>
        ))
      )}
    </div>
  );
}