export default function CommandStaff() {
  const staff = [
    { name: 'Chief Doe', rank: 'Chief of Police', callsign: '1-A-1' },
    { name: 'Lt. Smith', rank: 'Lieutenant', callsign: '2-L-1' }
  ];

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#08111F' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Command Staff</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {staff.map((member) => (
          <div key={member.name} className="glass-panel" style={{ padding: '20px', width: '250px' }}>
            <h3>{member.name}</h3>
            <p style={{ color: '#94A3B8' }}>{member.rank}</p>
            <p style={{ fontSize: '0.8rem' }}>Callsign: {member.callsign}</p>
          </div>
        ))}
      </div>
    </section>
  );
}