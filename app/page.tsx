import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="animate-in" style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      paddingTop: '100px'
    }}>
      <Navbar />

      {/* Sidebar Terminal Identity */}
      <aside style={{ 
        width: '300px', 
        padding: '50px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        borderRight: '1px solid rgba(255,255,255,0.1)' 
      }}>
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
        <h1 style={{ fontSize: '1.5rem', marginTop: '20px', textTransform: 'uppercase' }}>ZeroHour Command</h1>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem', letterSpacing: '0.2em' }}>ACTIVE PORTAL</p>
      </aside>

      {/* Main Terminal View */}
      <section style={{ flex: 1, padding: '50px' }}>
        <div className="glass-panel" style={{ height: '100%' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>SYSTEM OPERATIONAL</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="glass-panel">
              <h3>Unit Availability</h3>
              <p style={{ color: '#2563eb' }}>12 Units on Duty</p>
            </div>
            <div className="glass-panel">
              <h3>Priority Alerts</h3>
              <p style={{ color: '#ff4d4d' }}>0 Pending</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}