import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
  base: './LuLu_Portfolio/',
  plugins: [
    vue({
      input: ['resources/sass/app.scss', 'resources/js/app.js'],
      refresh: true,
    }),
  ],
});
