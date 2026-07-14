'use client';
import Navbar from '@/src/components/Navbar';

export default function HomePage() {
  const sections = [
    { 
      id: 'about', 
      title: 'Department Mission & History', 
      content: `The Los Santos Police Department (LSPD) serves as the primary law enforcement agency, dedicated to the protection of life and property. Founded on the principles of integrity, honor, and tactical precision, our mission extends beyond mere enforcement. We engage in community policing, proactive crime reduction, and rapid emergency response. Our history is marked by a relentless pursuit of justice, evolving from traditional patrol methods to modern, data-driven policing. We pride ourselves on maintaining order in a city of millions, ensuring that every citizen feels secure regardless of the sector.`, 
      img: 'https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 'divisions', 
      title: 'Elite Tactical Divisions', 
      content: `LSPD operates under a tiered hierarchy of specialized units. The 'Criminal Investigation Division' (CID) focuses on long-term narcotics and racketeering cases. Our 'S.W.A.T' teams are the tip of the spear, trained in high-risk hostage rescue and barricaded suspect apprehension. 'Air One' provides constant aerial surveillance, ensuring that patrol units on the ground have the tactical advantage. Furthermore, our 'High Patrol Unit' (HPU) maintains order on the arterial highways of Los Santos, focusing on high-speed pursuit management and intersection safety.`, 
      img: 'https://images.unsplash.com/photo-1505636683637-293699c264c7?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 'roster', 
      title: 'Command & Personnel Roster', 
      content: `Maintaining a transparent and accurate roster is vital for chain-of-command operations. All active-duty personnel are indexed by call sign, rank, and departmental certification. Command personnel are responsible for the oversight of daily operations, ensuring that the 'Standard Operating Procedures' (SOPs) are followed by every officer. Roster integrity is checked daily at the start of every shift (Roll Call). Discrepancies in call sign status or rank accreditation are subject to Internal Affairs (IA) review to maintain the high standards of the LSPD.`, 
      img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98a2ca?auto=format&fit=crop&q=80&w=800' 
    }
  ];

  return (
    <main style={{ background: '#020617', color: '#fff', scrollBehavior: 'smooth' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '5rem' }}>LSPD PORTAL</h1>
      </section>

      {/* Dynamic Content Sections */}
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} style={{ padding: '100px 20px', maxWidth: '1000px', margin: 'auto' }}>
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>{sec.title}</h2>
            <img src={sec.img} alt={sec.title} style={{ borderRadius: '16px', width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1', textAlign: 'justify' }}>{sec.content}</p>
          </div>
        </section>
      ))}
    </main>
  );
}