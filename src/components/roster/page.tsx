import RosterLinks from '@/src/components/RosterLinks';
import Divisions from '@/src/components/Divisions';

export default function ResourcesPage() {
  return (
    <main style={{ padding: '150px 40px' }}>
      <h1>Department Resources</h1>
      <RosterLinks />
      <h2 style={{ marginTop: '40px' }}>Our Divisions</h2>
      <Divisions />
    </main>
  );
}