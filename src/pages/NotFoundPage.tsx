import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import PageAccents from '../components/ui/PageAccents';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.page}>
      <PageAccents variant="notfound" />
      <div className={styles.pageContent}>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.code}>404</h1>
            <h2 className={styles.title}>Pagina nu a fost gasita</h2>
            <p className={styles.text}>
              Ne pare rau, pagina pe care o cauti nu exista sau a fost mutata.
            </p>
            <Link to="/" className={styles.link}>
              Inapoi la pagina principala
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NotFoundPage;
