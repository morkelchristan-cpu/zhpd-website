import Navbar from '@/src/components/Navbar';

export default function DivisionsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ padding: '0 40px' }}>
        <h1 style={{ marginBottom: '30px' }}>Command Divisions</h1>
        <p style={{ marginBottom: '20px' }}>Select a division to view specific operational protocols.</p>
        {/* Your division content here */}
      </div>
    </main>
  );
}