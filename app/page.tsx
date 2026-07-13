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

      <div style={{ textAlign: 'center', width: '100%', maxWidth: '650px', padding: '20px' }}>
        <Image src="/logo.png" alt="Logo" width={180} height={180} style={{ margin: '0 auto' }} priority />
        
        <h1 style={{ fontSize: '2.2rem', margin: '20px 0', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Tactical AI Assistant
        </h1>

        {/* AI Input Field */}
        <div className="glass-effect" style={{ 
          padding: '8px', 
          borderRadius: '12px', 
          display: 'flex', 
          alignItems: 'center',
          border: '1px solid rgba(37, 99, 235, 0.4)' // Blue accent border
        }}>
          <input 
            type="text" 
            placeholder="Ask AI for unit deployment or incident analysis..." 
            style={{ 
              width: '100%', background: 'transparent', border: 'none', padding: '15px 20px', 
              color: '#fff', fontSize: '1rem', outline: 'none' 
            }}
          />
          <button style={{ 
            background: '#2563eb', border: 'none', padding: '12px 25px', 
            borderRadius: '8px', color: '#fff', cursor: 'pointer', fontWeight: '600' 
          }}>
            SEND
          </button>
        </div>
        
        {/* Quick Suggestion Chips */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {['Analyze Incident', 'Deploy Units', 'Status Update'].map(tag => (
            <span key={tag} style={{ 
              fontSize: '0.75rem', padding: '5px 12px', borderRadius: '20px', 
              background: 'rgba(255,255,255,0.05)', color: '#94a3b8', cursor: 'pointer' 
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}