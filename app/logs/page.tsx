'use client';
import { useEffect, useState } from 'react';

interface IncidentLog {
  id: number;
  text: string;
}

export default function LogsPage() {
  const [logs, setLogs] = useState<IncidentLog[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // Add this
  const hasPermission = true; 

  useEffect(() => {
    const data = localStorage.getItem('incidentLogs');
    if (data) {
      try {
        setLogs(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse logs", e);
      }
    }
    setIsLoaded(true); // Mark as loaded
  }, []);

  if (!isLoaded) return null; // Wait for the component to mount fully
  if (!hasPermission) return <div className="page-container">Access Denied: Command Clearance Required.</div>;

  return (
    <main className="page-container">
      <div className="glass-effect" style={{ width: '80%', maxWidth: '800px', padding: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>COMMAND LOGS</h2>
        
        {logs.length === 0 ? (
          <p style={{ color: '#64748b' }}>No active reports found.</p>
        ) : (
          logs.map((log) => (
            <div key={log.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '15px 0' }}>
              {log.text}
            </div>
          ))
        )}
      </div>
    </main>
  );
}