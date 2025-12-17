import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'text-summary'],
      exclude: [
        'src/main.tsx'
      ],
      thresholds: {
        functions: 50,
      }
    },
  },
})