export default function Divisions() {
  const divisions = [
    "Patrol Division", "Traffic Enforcement", "SWAT", 
    "Detective Bureau", "Training Academy", "Internal Affairs", 
    "K9 Unit", "Air Support"
  ];

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#0D1B2A' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>Divisions</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {divisions.map((div) => (
          <div key={div} style={{ 
            padding: '30px', 
            background: '#152238', 
            borderRadius: '8px',
            border: '1px solid #1E3A5F',
            textAlign: 'center'
          }}>
            <h3>{div}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}