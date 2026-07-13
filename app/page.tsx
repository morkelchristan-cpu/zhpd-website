import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import Divisions from '@/src/components/Divisions';
import CommandStaff from '@/src/components/CommandStaff';
import Recruitment from '@/src/components/Recruitment';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    // 'fade-in' class provides the initial smooth animation
    <main className="fade-in">
      {/* Navbar is inside the main tag so it sits above the background */}
      <Navbar />
      
      {/* 
        Components are rendered here. 
        Ensure each component (Hero, Stats, etc.) uses the 
        'glass-panel' class for a consistent look.
      */}
      <Hero />
      <Stats />
      <Divisions />
      <CommandStaff />
      <Recruitment />
      
      <Footer />
    </main>
  );
}