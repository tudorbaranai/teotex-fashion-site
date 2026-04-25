import { useState } from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import NeedleAccent from '../components/ui/NeedleAccent';
import styles from './ContactPage.module.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.page}>
      <div className={styles.cornerNeedle} aria-hidden="true">
        <NeedleAccent className={styles.cornerNeedleSvg} />
      </div>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Ai intrebari? Suntem aici sa te ajutam. Trimite-ne un mesaj si iti vom raspunde cat mai curand.
          </p>
        </div>

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {submitted && (
              <div className={styles.successMessage}>
                Mesajul tau a fost trimis cu succes! Te vom contacta in curand.
              </div>
            )}
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Nume</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Numele tau"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="email@exemplu.ro"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="subject" className={styles.label}>Subiect</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                placeholder="Subiectul mesajului"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Mesaj</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Scrie mesajul tau aici..."
                rows={6}
                required
              />
            </div>
            <Button type="submit" variant="primary">Trimite Mesajul</Button>
          </form>

          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Informatii de Contact</h3>

              <div className={styles.infoItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L10 10L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>contact@example.com</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H6.5C7.05 3 7.54 3.33 7.71 3.85L8.65 6.61C8.8 7.07 8.67 7.58 8.3 7.91L7.09 9.09C7.95 10.99 9.01 12.05 10.91 12.91L12.09 11.7C12.42 11.33 12.93 11.2 13.39 11.35L16.15 12.29C16.67 12.46 17 12.95 17 13.5V15C17 16.1046 16.1046 17 15 17C8.37 17 3 11.63 3 5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <div>
                  <span className={styles.infoLabel}>Telefon</span>
                  <span className={styles.infoValue}>0740 86 771</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#25D366"
                    d="M16.001 3.2C8.928 3.2 3.2 8.928 3.2 16.001c0 2.255.59 4.461 1.71 6.402L3.2 28.8l6.555-1.71a12.78 12.78 0 0 0 6.246 1.61c7.073 0 12.801-5.728 12.801-12.799S23.072 3.2 16.001 3.2zm5.798 16.245c-.317-.158-1.875-.925-2.166-1.031-.291-.106-.503-.158-.715.158-.211.317-.82 1.031-1.005 1.243-.184.211-.371.238-.687.079-.317-.158-1.336-.492-2.546-1.57-.94-.838-1.575-1.872-1.76-2.189-.184-.317-.02-.488.139-.646.143-.142.317-.371.476-.557.158-.184.211-.317.317-.529.106-.211.053-.396-.026-.555-.079-.158-.715-1.722-.98-2.36-.258-.62-.52-.535-.715-.546l-.609-.011a1.171 1.171 0 0 0-.847.396c-.291.317-1.111 1.085-1.111 2.643 0 1.557 1.137 3.064 1.296 3.275.158.211 2.238 3.418 5.422 4.793.758.328 1.349.523 1.81.669.76.241 1.453.207 2 .126.611-.091 1.875-.766 2.139-1.506.264-.74.264-1.374.184-1.506-.079-.132-.291-.211-.608-.37z"
                  />
                </svg>
                <div>
                  <span className={styles.infoLabel}>WhatsApp</span>
                  {/* TODO: replace 40000000000 with the real number */}
                  <a
                    href="https://wa.me/40000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoValue}
                  >
                    +40 000 000 000
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M10 2C6.13 2 3 5.13 3 9C3 14 10 18 10 18C10 18 17 14 17 9C17 5.13 13.87 2 10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <div>
                  <span className={styles.infoLabel}>Adresa</span>
                  <span className={styles.infoValue}>Stroiesti, Suceava</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M10 5V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div>
                  <span className={styles.infoLabel}>Program</span>
                  <span className={styles.infoValue}>Luni - Vineri: 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            <div className={styles.mapPlaceholder}>
              <span>Harta Google Maps</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
