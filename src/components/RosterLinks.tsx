// src/components/RosterLinks.tsx
export default function RosterLinks() {
  return (
    <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
      <a href="YOUR_ROSTER_LINK" className="glass-panel" style={{ padding: '20px', display: 'block', textDecoration: 'none', color: 'white' }}>
        Official Roster (Google Sheets)
      </a>
      <a href="YOUR_SOP_LINK" className="glass-panel" style={{ padding: '20px', display: 'block', textDecoration: 'none', color: 'white' }}>
        Global SOP
      </a>
    </div>
  );
}