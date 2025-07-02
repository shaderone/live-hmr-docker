import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // Match requests starting with '/api'
        target: 'http://localhost:3100', // Your Node.js backend
        changeOrigin: true, // Changes the Origin header
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' prefix
      },
    },
  },
});
