import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/www.zyora.In/',
  plugins: [react()],
  define: {
    'process.env.NEXT_PUBLIC_BACKEND_URL': JSON.stringify('https://hurry-voice-chat-lz75.onrender.com'),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        owner: fileURLToPath(new URL('./owner/index.html', import.meta.url)),
      },
    },
  },
});
