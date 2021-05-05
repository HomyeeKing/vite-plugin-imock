import { defineConfig } from 'vite'
import Mocker from 'vite-plugin-imock'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Mocker()],
})
