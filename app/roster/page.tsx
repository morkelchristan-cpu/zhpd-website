// src/app/roster/page.tsx
import Navbar from '@/src/components/Navbar';

export default function RosterPage() {
  return (
    <main>
      <Navbar />
      
      {/* Main content container with 'glass-panel' applied */}
      <div className="glass-panel" style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        padding: '40px' 
      }}>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Department Resources</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
          Access official personnel records and procedural documentation.
        </p>

        {/* Clean card for the link */}
        <div className="glass-panel" style={{ marginBottom: '20px', cursor: 'pointer' }}>
          <h3 style={{ margin: 0 }}>Official Roster (Google Sheets)</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem' }}>Link to the main personnel database.</p>
        </div>

        {/* Clean card for the link */}
        <div className="glass-panel">
          <h3 style={{ margin: 0 }}>Global SOP</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem' }}>Standard Operating Procedures.</p>
        </div>

      </div>
    </main>
  );
}