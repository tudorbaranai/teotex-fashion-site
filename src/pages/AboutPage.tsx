import Container from '../components/ui/Container';
import NeedleAccent from '../components/ui/NeedleAccent';
import PageAccents from '../components/ui/PageAccents';
import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={styles.page}>
      <PageAccents variant="about" />
      <div className={styles.pageContent}>
      <section className={styles.storySection}>
        <Container>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <div className={styles.titleRow}>
                <h1 className={styles.sectionTitle}>Povestea Noastra</h1>
                <NeedleAccent className={styles.titleNeedle} />
              </div>
              <div className={styles.divider} />
              <p className={styles.text}>
                TeoTex s-a nascut din pasiunea pentru moda si dorinta de a oferi absolventilor romani
                articole de cea mai inalta calitate pentru momentele lor speciale. De la robele elegante
                pana la tocile si esarfele rafinate, fiecare produs este ales cu grija pentru a reflecta
                importanta acestui moment unic.
              </p>
              <p className={styles.text}>
                Credem ca fiecare absolvent merita sa se simta special in ziua absolvirii. De aceea,
                ne dedicam sa oferim produse care imbina eleganta cu confortul, la preturi accesibile.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}>
                <span>Imagine Atelier</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.missionSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Misiunea Noastra</h2>
          <div className={styles.divider} />
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4L24.5 15H36L26.5 22L30 34L20 26L10 34L13.5 22L4 15H15.5L20 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Calitate</h3>
              <p className={styles.valueText}>
                Selectam cu atentie materiale premium pentru fiecare articol din colectia noastra.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Incredere</h3>
              <p className={styles.valueText}>
                Peste mii de absolventi fericiti ne-au ales pentru cel mai important moment.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4C12 4 4 10 4 20C4 30 12 36 20 36C28 36 36 30 36 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M20 12V20L26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Promptitudine</h3>
              <p className={styles.valueText}>
                Livrare rapida si suport dedicat pentru a fi alaturi de tine la timp.
              </p>
            </div>
          </div>
        </Container>
      </section>
      </div>
    </div>
  );
}

export default AboutPage;
