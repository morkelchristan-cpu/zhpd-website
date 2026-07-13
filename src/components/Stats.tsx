export default function Stats() {
  const data = [
    { label: 'Active Officers', count: '42' },
    { label: 'Patrol Units', count: '12' },
    { label: 'Total Arrests', count: '890' },
  ];

  return (
    <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {data.map((item) => (
          <div key={item.label} className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#D4AF37' }}>{item.count}</div>
            <div style={{ color: '#94A3B8', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}