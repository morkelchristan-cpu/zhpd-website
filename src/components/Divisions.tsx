import styles from './Divisions.module.css';

const divisions = ['Patrol', 'Traffic', 'SWAT', 'Detective', 'Training', 'IA', 'K9', 'Air'];

export default function Divisions() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Divisions</h2>
      <div className={styles.grid}>
        {divisions.map((div) => (
          <div key={div} className={styles.card}>
            <h3>{div}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}