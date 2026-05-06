# Real Estate Agency

This is a real estate agency web application. I've created it as a pet project for my portfolio.

## The Project Structure

This project supposed to contain the following content.

### Home Page

The main page of the website it should contain these components.

- Hero (headline + search bar);
- Featured properties;
- "Why choose us" section;
- Testimonials;
- Call-to-action (contact/browse).

### Listings Page

This page should contain the core logic of the project.

- Property cards grid;
- Filters:
  - Property type (apartment, house, etc.);
  - Bedrooms;
  - Location (basic dropdown or text);
- Sorting (price, newest).

### Property Details Page

When clicking a listing:

Include:

- Image gallery;
- Price;
- Description;
- Key info (rooms, size, etc.);
- Contact form ("Request info").

And maybe:

- Save/Favorite button.

### About Page

This should tell about the company that "owns" the website. It should contain this content:

- Company description;
- Team members (fake data is fine).

But it can even just be lorem ipsum in my case.

### Contact Page

- Contact form (important!);
- Email/phone (fake);
- Map (optional).

### Deployment (GitHub Pages)

Install `gh-pages`:

```bash
npm install gh-pages --save-dev
```

Add a new script for deployment in `package.json`:

```bash
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Edit `vite.config.ts`:

```ts
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Add only for deployment with `gh-pages`.
  base: '/Real-Estate-Agency/',
})
```
