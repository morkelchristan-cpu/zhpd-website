import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="scroll-container">
      <Navbar />

      {/* Hero Section */}
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

      {/* About/Mission Section */}
      <section className="scroll-section">
        <div className="glass-panel" style={{ width: '700px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#fff' }}>DEPARTMENT MISSION</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.1rem' }}>
            The ZeroHour Police Department is dedicated to maintaining the highest standard of public safety. 
            Through tactical excellence and unwavering integrity, we ensure the city remains protected at all times.
          </p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="scroll-section">
        <div className="glass-panel" style={{ width: '700px', display: 'flex', justifyContent: 'space-around' }}>
          {[ { label: 'Active Officers', val: '42' }, { label: 'Calls Responded', val: '890' } ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', margin: 0, color: '#2563eb' }}>{stat.val}</h3>
              <p style={{ color: '#94a3b8', margin: '5px 0 0' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}