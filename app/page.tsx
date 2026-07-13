import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="scroll-container">
      <Navbar />

      {/* Hero Section - Logo Centered above Title */}
      <section className="scroll-section" style={{ flexDirection: 'column' }}>
        <Image src="/logo.png" alt="LSPD Logo" width={250} height={250} priority />
        <h1 style={{ fontSize: '3rem', margin: '20px 0 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          LSPD Portal
        </h1>
      </section>

      {/* Info Section - Info Centered below Title */}
      <section className="scroll-section">
        <div className="glass-effect" style={{ width: '80%', maxWidth: '800px', padding: '50px', textAlign: 'center' }}>
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