import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="scroll-container">
      <Navbar />

      {/* Hero Section - Keeps everything centered */}
      <section className="scroll-section">
        <div style={{ textAlign: 'center' }}>
          <Image src="/logo.png" alt="Department Logo" width={220} height={220} priority />
          <h1 style={{ fontSize: '3.5rem', margin: '20px 0 10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            ZeroHour Command
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', letterSpacing: '0.2em' }}>
            INTEGRITY • SERVICE • PROFESSIONALISM
          </p>
        </div>
      </section>

      {/* Mission & Stats Section - Now safely inside a glass-effect box */}
      <section className="scroll-section">
        <div className="glass-effect" style={{ width: '80%', maxWidth: '800px', padding: '50px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>DEPARTMENT MISSION</h2>
          <p style={{ color: '#d1d5db', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '40px' }}>
            The ZeroHour Police Department is dedicated to maintaining the highest standard of public safety. 
            Through tactical excellence and unwavering integrity, we ensure the city remains protected at all times.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', margin: 0, color: '#3b82f6' }}>42</h3>
              <p style={{ color: '#94a3b8' }}>Active Officers</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', margin: 0, color: '#3b82f6' }}>890</h3>
              <p style={{ color: '#94a3b8' }}>Calls Responded</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}