export default function Navbar() {
  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      padding: '20px', 
      background: 'rgba(13, 27, 42, 0.8)', 
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white',
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold' }}>ZHPD PORTAL</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <span>Home</span>
        <span>Divisions</span>
        <span>Recruitment</span>
      </div>
    </nav>
  );
}