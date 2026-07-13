import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import Divisions from '@/src/components/Divisions';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Divisions />
    </main>
  );
}