import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="animate-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Navbar />
      <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '600px', width: '90%' }}>
        <Image src="/logo.png" alt="LSPD Logo" width={180} height={180} priority />
        <h1 style={{ fontSize: '3.5rem', margin: '20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          ZeroHour Command
        </h1>
        <p style={{ color: '#94a3b8', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Integrity • Service • Professionalism
        </p>
      </div>
    </main>
  );
}