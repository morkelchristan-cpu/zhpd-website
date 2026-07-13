import Navbar from '@/src/components/Navbar';

export default function About() {
  return (
    <main style={{ paddingTop: '150px', textAlign: 'center' }}>
      <Navbar />
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1>About ZeroHour PD</h1>
        <p style={{ color: '#94A3B8', lineHeight: '1.8' }}>
          Established to provide elite service to the city... 
          (Add your department history here)
        </p>
      </div>
    </main>
  );
}