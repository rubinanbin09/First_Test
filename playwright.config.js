// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration
 * https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Location of your test files
  testDir: './tests',

  // Max time one test can run
  timeout: 30 * 1000,

  // Run tests in parallel
  fullyParallel: true,

  // Fail CI if test.only is left in code
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Use 1 worker in CI to avoid flakiness
  workers: process.env.CI ? 1 : undefined,

  // Generate HTML report
  reporter: 'html',

  // Shared settings for all tests
  use: {
    browserName: 'chromium',

    // ✅ Base URL for your application
    // Local runs use fallback
    // CI/CD overrides using BASE_URL secret
    baseURL: process.env.BASE_URL || 'https://practicetestautomation.com/practice-test-login/',

    // Collect trace only on first retry
    trace: 'on-first-retry',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
