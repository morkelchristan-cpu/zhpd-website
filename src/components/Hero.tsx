export default function Hero() {
  return (
    <section style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#08111F'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>ZEROHOUR POLICE DEPARTMENT</h1>
      <p style={{ fontSize: '1.5rem', color: '#94a3b8' }}>Integrity. Service. Professionalism.</p>
      <button style={{ 
        marginTop: '30px', 
        padding: '15px 30px', 
        backgroundColor: '#1E3A5F', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Join Department
      </button>
    </section>
  );
}