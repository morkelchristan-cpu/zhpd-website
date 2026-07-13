import Navbar from '@/src/components/Navbar';

export default function DivisionsPage() {
  return (
    <main className="fade-in" style={{ paddingTop: '120px' }}>
      <Navbar />
      <div className="glass-panel" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1>Command Divisions</h1>
        <p>Select a division to view operational protocols.</p>
      </div>
    </main>
  );
}