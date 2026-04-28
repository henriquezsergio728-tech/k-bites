# K-Bites Web

Native static first page for K-Bites, a premium handmade Korean kimchi brand.

## What is included

- `index.html` — single-page landing and order funnel.
- `styles.css` — fully stylized UI using the K-Bites warm red/orange, black, cream, and gold brand direction.
- `script.js` — no-login WhatsApp order automation and temporary local order persistence.
- `assets/k-bites-brand-mark.png` — brand image extracted from the provided K-Bites logo document.

## Run locally

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Then open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Configure WhatsApp

Open `script.js` and replace:

```js
const BUSINESS_WHATSAPP_NUMBER = '503XXXXXXXX';
```

with the real business number including country code, for example:

```js
const BUSINESS_WHATSAPP_NUMBER = '50370000000';
```

## Future backend/database path

The order object is already structured in `script.js`:

```js
{
  product,
  name,
  quantity,
  details,
  createdAt,
  status
}
```

Later, replace the `localStorage` section with a `fetch('/api/orders', ...)` call and connect it to a real database.


