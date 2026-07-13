import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <Navbar />
      
      <div className="animate-page-wrapper" style={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '5vh' 
      }}>
        {/* Department Logo */}
        <div style={{ marginBottom: '20px' }}>
          <Image src="/logo.png" alt="Department Logo" width={250} height={250} priority />
        </div>

        {/* High-Impact Title */}
        <div className="glass-panel" style={{ padding: '40px 60px', borderLeft: '4px solid #3b82f6' }}>
          <h1 style={{ fontSize: '3.5rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>
            ZeroHour Police Department
          </h1>
          <p style={{ fontSize: '1.2rem', marginTop: '10px', color: '#94a3b8', letterSpacing: '1px' }}>
            INTEGRITY • SERVICE • PROFESSIONALISM
          </p>
        </div>
      </div>
    </main>
  );
}