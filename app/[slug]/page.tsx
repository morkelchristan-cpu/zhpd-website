// src/app/[slug]/page.tsx

// Assuming you have your data object defined or imported here
type Division = { name: string; head: string; sop: string };
const data: Record<string, Division> = {
  // Your division data goes here
  'patrol': { name: 'Patrol Division', head: 'Chief Cloudii', sop: '#' },
  'dispatch': { name: 'Dispatch Division', head: 'TBD', sop: '#' },
};

// 1. Mark the component as async
export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the params promise to unwrap it
  const { slug } = await params;

  // 3. Now use the resolved slug to access your data
  const division = data[slug] || { name: 'Not Found', head: 'N/A', sop: '#' };

  return (
    <main style={{ 
      paddingTop: '150px', 
      padding: '0 40px', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      {/* 4. Display the resolved division data */}
      <div className="glass-effect" style={{ width: '90%', maxWidth: '800px', padding: '40px' }}>
        <h1 style={{ textTransform: 'uppercase', marginBottom: '20px' }}>{division.name}</h1>
        <div style={{ display: 'grid', gap: '20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px' }}>
            <p style={{ color: '#94a3b8', margin: 0 }}>Division Head</p>
            <h3 style={{ margin: '5px 0 0 0' }}>{division.head}</h3>
          </div>
          <a href={division.sop} style={{ 
            display: 'inline-block', 
            background: '#2563eb', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            color: '#fff', 
            textDecoration: 'none',
            textAlign: 'center'
          }}>
            VIEW SOP
          </a>
        </div>
      </div>
    </main>
  );
}