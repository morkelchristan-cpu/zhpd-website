'use client';
import { useEffect, useState } from 'react';

// Define the interface for your report data
interface IncidentLog {
  id: number;
  text: string;
}

export default function LogsPage() {
  const [logs, setLogs] = useState<IncidentLog[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // This would be your real auth check
  const hasPermission = true; 

  useEffect(() => {
    // Load logs from storage
    const data = localStorage.getItem('incidentLogs');
    if (data) {
      try {
        setLogs(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse logs", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Handler to remove a report
  const deleteReport = (id: number) => {
    const updated = logs.filter(l => l.id !== id);
    setLogs(updated);
    localStorage.setItem('incidentLogs', JSON.stringify(updated));
  };

  // Handler to accept a report
  const acceptReport = (id: number) => {
    alert(`Report #${id} has been accepted and processed.`);
    // You could add logic here to move the report to a "Processed" archive
  };

  // Prevent hydration mismatch by waiting for mount
  if (!isLoaded) return null;

  if (!hasPermission) {
    return <main className="page-container">Access Denied: Command Clearance Required.</main>;
  }

  return (
    <main className="page-container">
      <div className="glass-effect" style={{ width: '80%', maxWidth: '800px', padding: '40px' }}>
        <h2 style={{ marginBottom: '20px', textTransform: 'uppercase' }}>Command Logs</h2>
        
        {logs.length === 0 ? (
          <p style={{ color: '#64748b' }}>No active reports pending.</p>
        ) : (
          logs.map((log) => (
            <div key={log.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '20px 0', 
              borderBottom: '1px solid rgba(255,255,255,0.1)' 
            }}>
              <p style={{ margin: 0, color: '#e2e8f0' }}>{log.text}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => acceptReport(log.id)}
                  style={{ background: '#22c55e', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.7rem' }}
                >
                  ACCEPT
                </button>
                <button 
                  onClick={() => deleteReport(log.id)}
                  style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.7rem' }}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}