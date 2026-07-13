import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import Divisions from '@/src/components/Divisions';
import CommandStaff from '@/src/components/CommandStaff';
import Recruitment from '@/src/components/Recruitment';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Divisions />
      <CommandStaff />
      <Recruitment />
      <Footer />
    </main>
  );
}