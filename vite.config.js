import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Dietary Territory React app.
//
// This config is intentionally small and focused:
// - Uses the React plugin for fast refresh and JSX transformation.
// - Serves the app from the project root during development.
// - Builds a production bundle into ./dist.
// - Keeps the default Vite behavior for assets, HMR, and preview.
export default defineConfig({
  plugins: [react()],

  // Development server settings.
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: false,
    open: false,
  },

  // Preview server for `npm run preview` after building.
  preview: {
    host: 'localhost',
    port: 4173,
    strictPort: false,
  },

  // Production build output.
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2020',
    rollupOptions: {
      // If the app grows, explicit external dependencies can be added here.
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },

  // Module resolution.
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // CSS and asset handling.
  css: {
    devSourcemap: true,
  },

  // Helpful for local development and debugging.
  logLevel: 'info',
});