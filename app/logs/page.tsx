export default function LogsPage() {
  const logs = [
    { id: '10-82', desc: 'Traffic Stop - Alta St', status: 'Resolved' },
    { id: '10-99', desc: 'Officer Down - Sandy Shores', status: 'Urgent' }
  ];

  return (
    <main style={{ paddingTop: '120px', maxWidth: '900px', margin: '0 auto' }}>
      <div className="glass-effect" style={{ padding: '40px' }}>
        <h2 style={{ marginBottom: '30px', textTransform: 'uppercase' }}>Active Incident Logs</h2>
        {logs.map(log => (
          <div key={log.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span>{log.id}: {log.desc}</span>
            <span style={{ color: log.status === 'Urgent' ? '#ef4444' : '#22c55e' }}>{log.status}</span>
          </div>
        ))}
      </div>
    </main>
  );
}