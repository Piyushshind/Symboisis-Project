import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8071',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '/api/v1/inventory/showAll') 
      },
    },
  },
});
