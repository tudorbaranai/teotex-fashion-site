// Datele de contact ale magazinului, folosite în WhatsAppButton, ContactPage
// și CartPage. Valorile reale NU stau în cod: se pun într-un fișier `.env`
// (ignorat de git), după modelul din `.env.example`. Fără `.env`, site-ul
// afișează numerele și emailul de exemplu de mai jos.
const env = import.meta.env;

export const WHATSAPP_NUMBER: string = env.VITE_WHATSAPP_NUMBER ?? '40700000000';
export const PHONE_NUMBER: string = env.VITE_PHONE_NUMBER ?? '+40700000000';
export const PHONE_DISPLAY: string = env.VITE_PHONE_DISPLAY ?? '0700 000 000';
export const PHONE_DISPLAY_INTL: string = env.VITE_PHONE_DISPLAY_INTL ?? '+40 700 000 000';
export const CONTACT_EMAIL: string = env.VITE_CONTACT_EMAIL ?? 'contact@example.com';
