import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: ['steps/*.steps.ts', 'fixtures.ts'],
});

export default defineConfig({
  testDir,
  workers: 4,
  use: {
    baseURL: 'https://demo.quartexcollections.com/',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
    {
      name: 'safari',
      use: { ...devices['Desktop Safari'] },
    }
  ],
});