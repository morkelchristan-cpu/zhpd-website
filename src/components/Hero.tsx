import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image 
        src="/logo.png" 
        alt="ZHPD Logo" 
        width={200} 
        height={200} 
        className={styles.logo}
        priority
      />
      <h1 className={styles.title}>ZEROHOUR POLICE DEPARTMENT</h1>
      <p className={styles.subtitle}>Integrity. Service. Professionalism.</p>
    </section>
  );

<section className="glass-panel" style={{ margin: '40px auto', maxWidth: '1000px' }}>
  {/* Your component content */}
</section>

}