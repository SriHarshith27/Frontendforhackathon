import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
    proxy: {
      '/api/v1': {
        target: 'VITE_REACT_APP_API_URL=https://myproject-2200090170.onrender.com',
        changeOrigin: true,
        secure: false,    
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
