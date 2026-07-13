import Navbar from '@/src/components/Navbar';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '150px' }}>
      <Navbar />
      
      <div className="animate-page-wrapper" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', borderBottom: '2px solid #3b82f6', display: 'inline-block' }}>
          Command Overview
        </h1>
        
        <div className="glass-panel" style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#3b82f6' }}>Mission Statement</h2>
          <p style={{ lineHeight: '1.8' }}>
            The ZeroHour Police Department is committed to the preservation of peace and the enforcement of law within the jurisdiction. 
            We operate under a strict code of conduct, ensuring every officer maintains the highest standards of professional integrity.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="glass-panel">
            <h3>Our Values</h3>
            <ul style={{ paddingLeft: '20px', opacity: 0.8 }}>
              <li>Unwavering Accountability</li>
              <li>Community Partnership</li>
              <li>Tactical Excellence</li>
            </ul>
          </div>
          <div className="glass-panel">
            <h3>Command Structure</h3>
            <p style={{ opacity: 0.8 }}>The department is governed by a hierarchical command structure focused on merit and operational efficiency.</p>
          </div>
        </div>
      </div>
    </main>
  );
}