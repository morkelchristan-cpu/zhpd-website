import Navbar from '@/src/components/Navbar';

export default function RosterPage() {
  return (
    <main style={{ paddingTop: '150px', paddingBottom: '50px' }}>
      <Navbar />
      
      {/* Staggered animation wrapper */}
      <div className="animate-page-wrapper" style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Department Resources</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '60px', maxWidth: '800px' }}>
          Access official personnel records, standard operating procedures, and operational documentation.
        </p>

        {/* Each of these cards will animate in sequence */}
        <div className="glass-panel" style={{ marginBottom: '25px', cursor: 'pointer' }}>
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Official Roster (Google Sheets)</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.7 }}>Link to the main personnel database and assignments.</p>
        </div>

        <div className="glass-panel" style={{ marginBottom: '25px', cursor: 'pointer' }}>
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Global SOP</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.7 }}>Standard Operating Procedures for all department personnel.</p>
        </div>

        <div className="glass-panel" style={{ cursor: 'pointer' }}>
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Patrol Division Handbook</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.7 }}>Specific protocols and guidelines for the Patrol Division.</p>
        </div>

      </div>
    </main>
  );
}