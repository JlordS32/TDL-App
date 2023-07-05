import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use the 'vite-svg-loader' for SVG files
  optimizeDeps: {
    include: ['**/*.svg'],
  },
});
