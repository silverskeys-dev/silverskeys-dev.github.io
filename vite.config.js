import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/silverskeys-dev.github.io/', // 👈 isso é importante
  plugins: [react()],
})
