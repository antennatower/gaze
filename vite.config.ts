/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { PrerenderContentFile } from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: false,
      content: {
        highlighter: 'prism',
      },
      prerender: {
        routes: [
          {
            contentDir: 'src/content/posts',
            transform: (file: PrerenderContentFile) => {
              if (file.attributes['draft']) return false;
              const slug = file.attributes['slug'] || file.name;
              return `/posts/${slug}`;
            },
          },
          '/quotes/captives-war',
          '/quotes/the-expanse',
          '/books',
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
