export default function DivisionsPage() {
  const divisions = ['CID', 'S.W.A.T', 'Air One', 'HPU', 'HR', 'IA'];

  return (
    <main className="page-container">
      <div className="glass-effect" style={{ width: '80%', maxWidth: '600px', padding: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '30px' }}>DIVISIONS</h1>
        <div style={{ display: 'grid', gap: '15px' }}>
          {divisions.map((div) => (
            <div key={div} className="glass-effect" style={{ padding: '15px' }}>
              {div}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}