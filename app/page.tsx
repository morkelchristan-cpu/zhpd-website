import Navbar from '@/src/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="animate-in" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Navbar />

      <div style={{ textAlign: 'center', width: '100%', maxWidth: '600px', padding: '20px' }}>
        <Image src="/logo.png" alt="Logo" width={200} height={200} style={{ margin: '0 auto' }} priority />
        
        <h1 style={{ fontSize: '2.5rem', margin: '20px 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          ZeroHour Database
        </h1>

        {/* Professional Search Input */}
        <div className="glass-effect" style={{ padding: '5px', borderRadius: '50px', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Search incident reports, warrants, or personnel..." 
            style={{ 
              width: '100%', background: 'transparent', border: 'none', padding: '15px 25px', 
              color: '#fff', fontSize: '1rem', outline: 'none' 
            }}
          />
          <button style={{ 
            background: '#2563eb', border: 'none', padding: '10px 25px', 
            borderRadius: '50px', color: '#fff', cursor: 'pointer', fontWeight: 'bold' 
          }}>
            QUERY
          </button>
        </div>
        
        <p style={{ marginTop: '20px', color: '#94a3b8', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
          SECURE ACCESS GRANTED
        </p>
      </div>
    </main>
  );
}