import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    
    baseURL: process.env.BASE_URL,
    headless: false, 
    screenshot: 'on',
    video: 'on-first-retry',
    trace: 'on-first-retry',
    
  },
  projects: [
   {
      name: 'setup',
      testMatch: /.*\.setup\.spec\.ts/,
    },
    {
      name: 'chromium',
      testIgnore: /.*\.setup\.spec\.ts/,
      use: {
        browserName: 'chromium',
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'], // 👈 IMPORTANT
    },

    // {
    //   name: 'firefox',
    //   testIgnore: /.*\.setup\.spec\.ts/,
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     storageState: 'playwright/.auth/user.json',
    //   },
    //   dependencies: ['setup'],
    // },

    // {
    //   name: 'webkit',
    //   testIgnore: /.*\.setup\.spec\.ts/,
    //   use: {
    //     ...devices['Desktop Safari'],
    //     storageState: 'playwright/.auth/user.json',
    //   },
    //   dependencies: ['setup'],
    //},

    
  ],
});
