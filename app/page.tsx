'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
  { 
    id: 'about', 
    title: 'Department Mission', 
    content: 'The Los Santos Police Department (LSPD) is built on the pillars of integrity, tactical precision, and community trust. Our mission is to serve as a beacon of order in the heart of Los Santos. From high-speed pursuit management to complex investigations, every officer undergoes rigorous training to handle the city’s evolving threats. We operate not just as law enforcement, but as a community partner, ensuring that civilian safety is prioritized alongside tactical dominance.', 
    img: 'https://i.postimg.cc/3RRvzTZm/image-2026-07-15-001327520.png' 
  },
  { 
    id: 'divisions', 
    title: 'Elite Tactical Divisions', 
    content: 'Our organizational structure is designed for agility and rapid response. The Criminal Investigation Division (CID) spearheads undercover operations. Our S.W.A.T unit is the tactical anchor, equipped for high-risk hostage extraction. Meanwhile, our Air One division maintains total situational awareness from above, providing real-time data to ground units. Each division is held to the highest standard of departmental excellence.', 
    img: 'https://i.postimg.cc/jSbvmDnZ/image-2026-07-15-001507772.png' 
  },
  { 
    id: 'jurisdiction', 
    title: 'Operational Jurisdiction', 
    content: 'The LSPD operates strictly within its designated borders. Maintaining clear knowledge of the State of San Andreas, Los Santos County, and Blaine County jurisdictions is mandatory for all personnel. Understanding these boundaries ensures legal compliance during pursuits, scene management, and inter-agency coordination.', 
    img: '/jurisdriction.png', 
    isMap: true 
  },
  { 
    id: 'roster', 
    title: 'Officer Roster', 
    content: 'The LSPD Roster is a live-tracking document of our active-duty force. It details call-signs, rank tiers, and certification levels. Command staff utilize this roster to manage shift rotations and field assignments. Accuracy is paramount; all personnel are required to report duty status changes immediately. Unauthorized modifications are treated as a breach of internal security.', 
    links: [
      { text: 'VIEW LIVE ROSTER', url: 'https://docs.google.com/spreadsheets/d/1AZavVnTxOkl-jmctN5CBoLfG_6zqqBYs0z9-rv8F8tQ/edit?gid=1264692443#gid=1264692443' },
      { text: 'RANK REQUIREMENTS', url: 'https://docs.google.com/document/d/1biLXFqBhmG4cGRIiE0niBOFF0ldWZzxE2tqb7e73k78/edit?usp=sharing' }
    ],
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98a2ca?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: 'ai', 
    title: 'Tactical AI Assistant', 
    content: 'Need real-time procedural guidance or penal code verification? Our Tactical AI is ready to assist. It is fully integrated with LSPD databases to provide immediate, compliant answers for officers in the field.', 
    link: '/ai', 
    buttonText: 'ACCESS AI TERMINAL' 
  },
  { 
    id: 'reports', 
    title: 'Tactical Reporting Portal', 
    content: 'This portal serves as the official repository for all incident reports. Whether filing a traffic citation or a major felony statement, this form ensures your data reaches Command securely. Please be thorough in your descriptions; detail time of incident, suspects involved, and units responding.', 
    isForm: true 
  },
  { 
    id: 'logs', 
    title: 'Command Logs', 
    content: 'The Command Logs contain the secure history of all processed reports and sensitive internal activity. This section is strictly for personnel with the correct clearance levels. Authorized access only.', 
    link: '/logs', 
    buttonText: 'ENTER SECURE LOGS' 
  }
];

export default function HomePage() {
  return (
    <main style={{ background: '#020617', color: '#f8fafc', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <motion.section 
        id="home" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
        <motion.img 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          src="/logo.png" 
          alt="LSPD Logo" 
          style={{ width: '150px', marginBottom: '20px' }} 
        />
        <motion.h1 
          initial={{ y: 50 }} 
          animate={{ y: 0 }} 
          transition={{ type: 'spring', stiffness: 50 }}
          className="gradient-text" 
          style={{ fontSize: '6rem', margin: 0 }}
        >
          LSPD PORTAL
        </motion.h1>
        <p style={{ color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5em', marginTop: '1rem' }}>Command & Control Infrastructure</p>
      </motion.section>

      {/* Dynamic Sections */}
      {SECTIONS.map((sec) => (
        <motion.section 
          key={sec.id} 
          id={sec.id}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ padding: '120px 20px', display: 'flex', justifyContent: 'center' }}
        >
          <div className="glass-card" style={{ maxWidth: '1000px', width: '100%', borderLeft: '4px solid #3b82f6' }}>
            <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '30px' }}>{sec.title}</h2>
            
            {sec.img && !sec.isMap && (
              <img src={sec.img} alt={sec.title} style={{ width: '100%', borderRadius: '20px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
            )}
            
            {sec.isMap && (
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img src={sec.img} alt="Jurisdiction Map" style={{ width: '100%', maxWidth: '500px', borderRadius: '16px', border: '2px solid #3b82f6', boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }} />
              </div>
            )}
            
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#cbd5e1', textAlign: 'justify', marginBottom: '30px' }}>
              {sec.content}
            </p>
            
            {sec.isForm && (
              <div style={{ padding: '30px', background: 'rgba(0,0,0,0.2)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <textarea 
                  placeholder="Enter incident description, suspect details, and responding units here..." 
                  style={{ width: '100%', height: '200px', background: 'transparent', border: '1px solid #334', borderRadius: '12px', color: '#fff', padding: '20px', fontSize: '1rem' }} 
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert('Report Submitted to Command')} 
                  style={{ marginTop: '20px', width: '100%', padding: '18px', background: '#3b82f6', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
                >
                  SUBMIT OFFICIAL REPORT
                </motion.button>
              </div>
            )}

            {sec.links && (
              <div style={{ display: 'flex', gap: '15px' }}>
                {sec.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" style={{ textDecoration: 'none' }}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ padding: '15px 30px', background: 'transparent', border: '1px solid #60a5fa', color: '#60a5fa', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      {link.text}
                    </motion.button>
                  </a>
                ))}
              </div>
            )}

            {sec.link && !sec.links && (
              <Link href={sec.link} style={{ textDecoration: 'none' }}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ padding: '15px 30px', background: 'transparent', border: '1px solid #60a5fa', color: '#60a5fa', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  {sec.buttonText}
                </motion.button>
              </Link>
            )}
          </div>
        </motion.section>
      ))}
    </main>
  );
}