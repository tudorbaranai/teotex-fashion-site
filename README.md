# TeoTex — Articole textile pentru orice ocazie

Site de prezentare și e-commerce pentru **TeoTex**, un atelier românesc cu peste 10 ani de experiență în confecționarea și vânzarea de articole textile. Catalogul acoperă cinci secțiuni mari: îmbrăcăminte pentru femei, îmbrăcăminte pentru bărbați, textile pentru casă, articole de absolvire (robe, toci, eșarfe) și ținute pentru nuntă (rochii de mireasă, costume de mire). Interfața este integral în limba română, iar prețurile sunt afișate în RON (lei).

## Stack tehnic

- **React 19** + **TypeScript** (strict)
- **Vite** pentru bundling și dev server
- **React Router 7** (`HashRouter`) pentru navigare client-side
- **CSS Modules** pentru stilizare la nivel de componentă
- **vite-plugin-singlefile** — output-ul de producție este un singur `index.html` cu JS și CSS inline, care se poate deschide direct cu dublu-click sau servi de pe orice host static

## Funcționalități

- **Catalog împărțit în 5 secțiuni** (Femei, Bărbați, Casă, Absolvire, Nunți), cu sub-categorii (rochie, bluză, fustă, cămașă, costum, pijama, perdea, lenjerie, robă, tocă, eșarfă, rochie mireasă, costum mire).
- **Navigare cu dropdown** pentru "Produse" în navbar (deschidere doar la click, închidere pe Esc / outside-click / selecție); pe mobil dropdown-ul devine listă plată în meniul hamburger.
- **Filtrare avansată în sidebar pe stânga** pe pagina Produse — casete pătrate cu filtre pentru secțiune, sub-categorie, preț (min/max), sortare (recomandate / preț ↑↓ / cele mai noi) și disponibilitate (doar produse în stoc). Pe mobil filtrele se ascund în spatele unui buton `Filtre (N)`.
- **Coș de cumpărături** la `/#/cos` — listă produse cu controale de cantitate (`+`/`−`), subtotal pe rând, ștergere item, sumar comandă lipicios, plus stare goală cu CTA.
- **Listă de favorite** la `/#/favorite` — grid de produse, sincronizat cu inima din cardurile de produs.
- **Iconițe coș + favorite în navbar** cu badge-uri care afișează numărul de produse, identice ca stil.
- **Buton flotant WhatsApp** vizibil pe orice pagină (placeholder `wa.me/40000000000` — se înlocuiește în `src/components/ui/WhatsAppButton.tsx` și `src/pages/ContactPage.tsx` cu numărul real).
- **Scroll la top automat** la orice navigare, inclusiv click pe Link către pagina curentă (depinde de `location.key`), implementat în `src/components/ui/ScrollToTop.tsx`.
- **Navbar sticky cu shadow soft** care plutește deasupra paginii, separat vizual de panoul de hero.
- **Hero extins** pe pagina principală — panoul crem (`--color-bg-primary`) ocupă ~88vh pe desktop / 65vh pe mobil, ca să domine prima vizualizare.
- **Routing pe URL share-abil** — secțiunea curentă se păstrează în query (`?sectiune=femei` etc.), deci link-urile pot fi salvate / trimise.

## Rute

| URL (hash) | Pagină |
|---|---|
| `/` | Pagina principală |
| `/produse` | Toate produsele |
| `/produse?sectiune=femei` | Produsele din secțiunea Femei |
| `/produse?sectiune=barbati` | Bărbați |
| `/produse?sectiune=casa` | Textile pentru casă |
| `/produse?sectiune=absolvire` | Articole de absolvire |
| `/produse?sectiune=nunti` | Articole de nuntă |
| `/despre-noi` | Despre noi |
| `/contact` | Contact (formular + date + WhatsApp) |
| `/cos` | Coșul de cumpărături |
| `/favorite` | Lista de favorite |

Orice altă rută trimite la pagina 404.

## Structura proiectului

```
src/
├── App.tsx                       # rutare top-level (HashRouter, ScrollToTop, providers)
├── main.tsx                      # entry point
├── components/
│   ├── home/                     # secțiuni de pe pagina principală (FeaturedProducts etc.)
│   ├── layout/                   # Navbar (cu dropdown + emblema), Footer, Layout
│   ├── product/                  # ProductCard, ProductFilter (sidebar), ProductGrid
│   └── ui/                       # Button, Container, NeedleAccent, WhatsAppButton, ScrollToTop, ...
├── context/                      # CartContext, WishlistContext (state global, in-memory)
├── data/products.ts              # catalogul static de produse
├── hooks/                        # useCart, useWishlist
├── pages/                        # Home, Products, About, Contact, Cart, Favorite, NotFound
├── styles/                       # global.css, reset.css, tokens.css (variabile de design)
└── types/                        # tipuri TypeScript (Product, Cart, ProductSection, ProductCategory)
```

## Rulare locală

Cerințe: Node.js 20+ și npm.

```bash
npm install
npm run dev
```

Vite pornește dev server-ul (de obicei pe `http://localhost:5173`) cu hot module reload.

### Comenzi disponibile

| Comandă | Ce face |
|---|---|
| `npm run dev` | Pornește dev server-ul Vite cu HMR |
| `npm run build` | Rulează `tsc -b` și apoi build de producție în `dist/` (un singur `index.html` self-contained) |
| `npm run preview` | Servește local build-ul din `dist/` pentru verificare |
| `npm run lint` | Rulează ESLint peste tot codul |

## Build și deploy

```bash
npm run build
```

După build, `dist/` conține:

- `index.html` — un singur fișier cu tot JavaScript-ul și CSS-ul inline (prin `vite-plugin-singlefile`)
- `assets/images/` — imagini de produs

Pentru a vizualiza site-ul fără un server web, se deschide `dist/index.html` direct în browser. Pentru hostare, se urcă conținutul folderului `dist/` pe orice host static (Vercel, Netlify, GitHub Pages, hosting clasic etc.).

> **Notă:** Rutarea folosește `HashRouter`, deci URL-urile au forma `/#/produse`, `/#/contact` etc. Asta permite ca site-ul să funcționeze de pe orice cale (inclusiv `file://`) fără configurare server-side. Dacă se trece în viitor la `BrowserRouter`, hostul trebuie configurat să facă fallback către `index.html` pentru toate rutele.

## Editare conținut

- **Produse:** `src/data/products.ts`. Fiecare produs are `section` (`FEMEI` / `BARBATI` / `CASA` / `ABSOLVIRE` / `NUNTI`) și `category` (sub-tipul). Tipurile sunt definite în `src/types/product.ts`.
- **Imagini produse:** se pun în `public/assets/images/` și se referențiază relativ ca `assets/images/<nume-fisier>` în `products.ts`.
- **Culori, tipografie, spațieri:** variabilele de design sunt centralizate în `src/styles/tokens.css`.
- **Date de contact:** `src/pages/ContactPage.tsx` (email, telefon, adresă, program, link WhatsApp).
- **Număr de telefon WhatsApp:** se înlocuiește placeholder-ul `40000000000` în `src/components/ui/WhatsAppButton.tsx` și `src/pages/ContactPage.tsx` cu numărul real (caută `// TODO`).
- **Texte despre brand:** `src/pages/AboutPage.tsx`.

## Limitări curente (de avut în vedere)

- Catalogul, coșul și lista de favorite sunt **doar pe client** — nu există backend, persistență între sesiuni sau plată reală. Butonul "Finalizeaza Comanda" afișează doar un mesaj de demo.
- Imaginile de produs sunt placeholder SVG pentru toate cele 31 de produse. De înlocuit cu fotografii reale înainte de lansare.
- Nu există încă pagini dedicate de produs (PDP) — cardul nu navighează la un detaliu separat.
- Nu există pagini legale (Termeni, Retur, GDPR, ANPC SAL, SOL) — necesare pentru e-commerce real în România.

## Licență

Cod proprietar. Toate drepturile rezervate © TeoTex.
