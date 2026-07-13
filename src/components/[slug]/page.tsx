import Navbar from '@/src/components/Navbar';

// 1. Define the structure of your data
interface DivisionInfo {
  name: string;
  head: string;
  sop: string;
}

export default function DivisionPage({ params }: { params: { slug: string } }) {
  // 2. Map the slugs to the info
  const data: Record<string, DivisionInfo> = {
    'patrol': { name: 'Patrol Division', head: 'Chief Doe', sop: '#' },
    'traffic': { name: 'Traffic Enforcement', head: 'Lt. Miller', sop: '#' },
    'swat': { name: 'SWAT', head: 'Commander Smith', sop: '#' },
    'detective': { name: 'Detective Bureau', head: 'Det. Vance', sop: '#' }
  };

  // 3. Fallback if the slug doesn't exist
  const division = data[params.slug] || { name: 'Not Found', head: 'N/A', sop: '#' };

  return (
    <main style={{ paddingTop: '150px', padding: '0 40px' }}>
      <Navbar />
      <div className="glass-panel" style={{ padding: '60px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>{division.name}</h1>
        <p style={{ fontSize: '1.2rem', color: '#94A3B8' }}>
          <strong>Head of Division:</strong> {division.head}
        </p>
        <a 
          href={division.sop} 
          style={{ color: '#D4AF37', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}
        >
          View Division SOP →
        </a>
      </div>
    </main>
  );
}