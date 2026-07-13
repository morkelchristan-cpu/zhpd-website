import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="scroll-container">
      <Navbar />

      {/* Hero Section */}
      <section className="scroll-section">
        <div style={{ textAlign: 'center' }}>
          <Image src="/logo.png" alt="LSPD Logo" width={250} height={250} priority />
          <h1 style={{ fontSize: '3rem', margin: '20px 0 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            LSPD Portal
          </h1>
        </div>
      </section>

      {/* Information Section */}
      <section className="scroll-section">
        <div className="glass-effect" style={{ width: '80%', maxWidth: '800px', padding: '50px' }}>
          <h2 style={{ marginBottom: '20px' }}>DEPARTMENT INFORMATION</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            The Los Santos Police Department is an elite law enforcement agency. 
            This portal serves as the central hub for officer communications, 
            incident documentation, and tactical coordination.
          </p>
        </div>
      </section>
    </main>
  );
}