import { defineConfig } from 'vitest/config'
// import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  // test: {
  //   projects: [
  //     {
  //       test: {
  //         include: [
  //           'src/tests/**/*.spec.ts'
  //         ],
  //         name: 'unit tests',
  //         environment: 'node'
  //       },
  //     },
  //     {
  //       test: {
  //         include: [
  //           'src/tests-browser/**/*.spec.tsx'
  //         ],
  //         name: 'browser',
  //         browser: {
  //           provider: playwright(),
  //           enabled: true,
  //           headless: true,
  //           instances: [
  //             {browser: 'firefox'}
  //           ],
  //         },
  //       }
  //     }
  //   ],

  test: {
    globals: true,
    environment: 'jsdom',
    
    coverage: {
      provider: 'istanbul', // or 'istanbul'
      reporter: ['text', 'text-summary', 'lcov', 'html'],
      exclude: [
        'src/main.tsx'
      ],
      thresholds: {
        functions: 50,
      }
    },
  },

  // coverage: {
  //   provider: 'istanbul', // or 'istanbul'
  //   reporter: ['text', 'text-summary', 'lcov', 'html'],
  //   exclude: [
  //     'src/main.tsx'
  //   ],
  //   thresholds: {
  //     functions: 50,
  //   }
  // },
  // },
})