export default function Recruitment() {
  const steps = ['Application', 'Review', 'Interview', 'Academy', 'Field Training'];
  return (
    <section style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h2>Recruitment Process</h2>
      <div style={{ marginTop: '30px' }}>
        {steps.map((step, i) => (
          <div key={step}>
            <div style={{ padding: '15px', border: '1px solid #1E3A5F', margin: '10px auto', width: '200px' }}>{step}</div>
            {i < steps.length - 1 && <div style={{ height: '20px', width: '2px', background: '#1E3A5F', margin: '0 auto' }} />}
          </div>
        ))}
      </div>
    </section>
  );
}