import { defineConfig } from 'vite'
import Mocker from '../src/index'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Mocker()],
})
