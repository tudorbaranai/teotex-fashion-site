# TeoTex — Articole pentru Absolvire

Site de prezentare și e-commerce pentru **TeoTex**, un brand românesc dedicat articolelor pentru ceremoniile de absolvire: robe, toci și eșarfe. Interfața este integral în limba română, iar prețurile sunt afișate în RON (lei).

## Stack tehnic

- **React 19** + **TypeScript**
- **Vite** pentru bundling și dev server
- **React Router** (HashRouter) pentru navigare client-side
- **CSS Modules** pentru stilizare la nivel de componentă
- **vite-plugin-singlefile** — output-ul de producție este un singur `index.html` cu JS și CSS inline, care se poate deschide direct cu dublu-click sau servi de pe orice host static

## Structura proiectului

```
src/
├── App.tsx                   # rutare top-level (HashRouter)
├── main.tsx                  # entry point
├── components/
│   ├── home/                 # secțiuni hero / categorii / featured pentru pagina principală
│   ├── layout/               # Navbar, Footer, Layout
│   ├── product/              # ProductCard, ProductFilter
│   └── ui/                   # Button, Container și alte primitive
├── context/                  # CartContext, WishlistContext
├── data/products.ts          # catalogul static de produse
├── hooks/                    # useCart, useWishlist
├── pages/                    # HomePage, ProductsPage, AboutPage, ContactPage, NotFoundPage
├── styles/                   # global.css, reset.css, tokens.css (variabile de design)
└── types/                    # tipuri TypeScript (Product, Cart, etc.)
```

## Rulare locală

Cerințe: Node.js 20+ și npm.

```bash
npm install
npm run dev
```

Vite va porni dev server-ul (de obicei pe `http://localhost:5173`) cu hot module reload.

### Comenzi disponibile

| Comandă | Ce face |
|---|---|
| `npm run dev` | Pornește dev server-ul Vite cu HMR |
| `npm run build` | Build de producție în `dist/` (un singur `index.html` self-contained) |
| `npm run preview` | Servește local build-ul din `dist/` pentru verificare |
| `npm run lint` | Rulează ESLint peste tot codul |

## Build și deploy

```bash
npm run build
```

După build, `dist/` conține:

- `index.html` — un singur fișier cu tot JavaScript-ul și CSS-ul inline
- `favicon.svg` — pictograma site-ului (mașină de cusut, în paleta brand-ului)
- `assets/images/` — imagini de produs

Pentru a vizualiza site-ul fără un server web, pur și simplu se deschide `dist/index.html` în browser. Pentru hostare, se urcă conținutul folderului `dist/` pe orice host static (Vercel, Netlify, GitHub Pages, hosting clasic etc.).

> **Notă:** Rutarea folosește `HashRouter`, deci URL-urile au forma `/#/produse`, `/#/contact` etc. Asta permite ca site-ul să funcționeze de pe orice cale (inclusiv `file://`) fără configurare server-side.

## Editare conținut

- **Produse:** se modifică `src/data/products.ts`. Categoriile disponibile sunt `ROBA`, `TOCA` și `ESARFA` (definite în `src/types/product.ts`).
- **Imagini produse:** se pun în `public/assets/images/` și se referențiază relativ ca `assets/images/<nume-fisier>`.
- **Culori și tipografie:** variabilele de design sunt centralizate în `src/styles/tokens.css`.
- **Date de contact:** `src/pages/ContactPage.tsx`.

## Licență

Cod proprietar. Toate drepturile rezervate © TeoTex.
