import Navbar from '@/src/components/Navbar';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '150px', textAlign: 'center' }}>
      <Navbar />
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1>About Us</h1>
        <p style={{ color: '#94A3B8', lineHeight: '1.8' }}>
          Welcome to the ZeroHour Police Department official portal. 
          We are dedicated to integrity, service, and professionalism.
        </p>
      </div>
    </main>
  );
}