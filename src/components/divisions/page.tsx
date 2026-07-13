import Navbar from '@/src/components/Navbar';
import Divisions from '@/src/components/Divisions';

export default function DivisionsIndexPage() {
  return (
    <main style={{ paddingTop: '150px' }}>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Our Divisions</h1>
      <Divisions />
    </main>
  );
}