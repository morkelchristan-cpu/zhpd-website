import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import Divisions from '@/src/components/Divisions';

export default function Home() {
  return (
    <main className="scroll-container">
      <Navbar />
      
      {/* Each component is wrapped in a full-screen scroll section */}
      <section className="scroll-section">
        <Hero />
      </section>

      <section className="scroll-section">
        <div className="glass-panel" style={{ width: '80%' }}>
          <Stats />
        </div>
      </section>

      <section className="scroll-section">
        <div className="glass-panel" style={{ width: '80%' }}>
          <Divisions />
        </div>
      </section>
    </main>
  );
}