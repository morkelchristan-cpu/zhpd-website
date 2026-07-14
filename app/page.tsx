'use client';
import Link from 'next/link';

const SECTIONS = [
  {
    id: 'about',
    title: 'Mission Integrity',
    content: 'The LSPD operates as the heartbeat of Los Santos. Our commitment to law and order is non-negotiable. Every officer is an extension of our collective promise to serve. This section outlines our core values, the history of our precinct, and the tactical ethos we uphold daily. Stand tall, act with honor, and remember—your actions define the legacy of this department.',
    img: 'https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'divisions',
    title: 'Tactical Division Overview',
    content: 'Knowledge is power. Whether you are operating within CID, S.W.A.T., or HPU, knowing your division’s role is critical to mission success. Here you will find the specific SOPs, gear requirements, and deployment protocols for each unit. Elite performance is the standard; ensure your division knowledge is up to date to maintain tactical superiority in the field.',
    img: 'https://images.unsplash.com/photo-1505636683637-293699c264c7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'roster',
    title: 'Official Officer Roster',
    content: 'The Roster is the ultimate indicator of force readiness. Verified call-signs and rank statuses are updated in real-time. Command monitors this ledger to ensure every patrol, SWAT intervention, and aerial patrol is properly staffed. If your status is outdated, report to HR immediately. This is the pulse of our workforce.',
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98a2ca?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ai',
    title: 'Tactical AI Assistant',
    content: 'When seconds count, the Tactical AI is your force multiplier. Designed to process legal inquiries, procedural questions, and tactical data on the fly, this tool is available 24/7. Don\'t guess—verify. Optimize your decision-making in the field with the most advanced processing unit in the LSPD.',
    link: '/ai',
    buttonText: 'INITIALIZE AI TERMINAL'
  },
  {
    id: 'reports',
    title: 'Incident Reporting Engine',
    content: 'Precision in documentation is the hallmark of a great officer. Use the portal below to file reports. Every detail—from the time of day to suspect descriptors—is ingested into the Command database. Your reports form the evidence that builds our cases. Do your duty; document thoroughly.',
    isForm: true
  },
  {
    id: 'logs',
    title: 'Command Logs',
    content: 'Restricted area. Secure incident streams, administrative logs, and internal department communications are housed here. Access is strictly limited to verified Command personnel. Integrity in your clearance is the foundation of departmental security.',
    link: '/logs',
    buttonText: 'ACCESS SECURE STREAM'
  }
];

export default function HomePage() {
  return (
    <main style={{ background: '#020617', color: '#f8fafc', paddingBottom: '100px' }}>
      {/* Hero Section */}
      <section id="home" style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '6rem', marginBottom: '1rem', textAlign: 'center' }}>LSPD PORTAL</h1>
        <p style={{ color: '#94a3b8', letterSpacing: '0.5em', textTransform: 'uppercase' }}>Command & Control Infrastructure</p>
      </section>

      {/* Sections */}
      {SECTIONS.map((sec) => (
        <section key={sec.id} id={sec.id} style={{ padding: '100px 20px', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-card" style={{ maxWidth: '900px', width: '100%', borderLeft: '4px solid #3b82f6' }}>
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '25px' }}>{sec.title}</h2>
            {sec.img && <img src={sec.img} alt={sec.title} style={{ width: '100%', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }} />}
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '30px' }}>{sec.content}</p>
            
            {sec.isForm && (
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '30px', borderRadius: '16px' }}>
                <textarea placeholder="File detailed report..." style={{ width: '100%', height: '150px', background: 'transparent', border: '1px solid #334', color: '#fff', padding: '15px', borderRadius: '8px' }} />
                <button style={{ marginTop: '15px', padding: '12px 30px', background: '#3b82f6', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>SUBMIT</button>
              </div>
            )}
            {sec.link && (
              <Link href={sec.link} style={{ textDecoration: 'none' }}>
                <button style={{ padding: '15px 30px', background: 'transparent', border: '1px solid #60a5fa', color: '#60a5fa', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>{sec.buttonText}</button>
              </Link>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}