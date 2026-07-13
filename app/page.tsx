import Navbar from '@/src/components/Navbar';

export default function HomePage() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Apply the animation wrapper to the main content container */}
      <div className="animate-page-wrapper" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 'calc(100vh - 120px)', 
        textAlign: 'center' 
      }}>
        
        <div className="glass-panel" style={{ padding: '60px 80px', maxWidth: '700px' }}>
          <h1 style={{ fontSize: '4rem', margin: '0 0 15px 0' }}>ZHPD</h1>
          <p style={{ fontSize: '1.5rem', opacity: 0.8, margin: 0 }}>ZEROHOUR POLICE DEPARTMENT</p>
        </div>
        
        <div className="glass-panel" style={{ marginTop: '30px', maxWidth: '500px', opacity: 0.9 }}>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', margin: 0 }}>"Integrity. Service. Professionalism."</p>
        </div>

      </div>
    </main>
  );
}