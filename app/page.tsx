import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="animate-in" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      paddingTop: '150px' 
    }}>
      <Navbar />

      {/* Hero Gateway */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <Image src="/logo.png" alt="LSPD Logo" width={240} height={240} priority />
        <h1 style={{ fontSize: '4rem', margin: '30px 0 10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          ZeroHour Command
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          Tactical Operations Portal
        </p>
      </div>

      {/* Action Row */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div className="glass-panel" style={{ width: '300px' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Dispatch</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Monitor active unit status and real-time incident calls.</p>
        </div>
        <div className="glass-panel" style={{ width: '300px' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Personnel</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Access the department roster and individual service records.</p>
        </div>
      </div>
    </main>
  );
}