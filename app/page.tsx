import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '60px' // Provides space below the fixed navbar
    }}>
      
      {/* Hero Section: Centered Logo and Title */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Image src="/logo.png" alt="LSPD Logo" width={250} height={250} priority />
        <h1 style={{ 
          fontSize: '3rem', 
          margin: '20px 0 0 0', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em' 
        }}>
          LSPD Portal
        </h1>
      </div>

      {/* Information Section: Centered Block */}
      <div className="glass-effect" style={{ 
        width: '80%', 
        maxWidth: '800px', 
        padding: '50px', 
        textAlign: 'center' 
      }}>
        <h2 style={{ marginBottom: '20px', letterSpacing: '0.05em' }}>DEPARTMENT INFORMATION</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.1rem' }}>
          The Los Santos Police Department is an elite law enforcement agency. 
          This portal serves as the central hub for officer communications, 
          incident documentation, and tactical coordination.
        </p>
      </div>
      
    </main>
  );
}