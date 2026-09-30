import { defineConfig, devices } from "@playwright/test";

const PORT = 4173;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
  },
  projects: [
    { name: "mobile-chrome", use: { ...devices["Pixel 7"] } },
    // iPhone screen, touch and user agent, rendered by Chromium
    { name: "mobile-iphone", use: { ...devices["iPhone 13"], browserName: "chromium" } },
    // Real Safari engine; opt in with PW_WEBKIT=1 (WebKit can't start in some sandboxed environments)
    ...(process.env.PW_WEBKIT ? [{ name: "mobile-safari", use: { ...devices["iPhone 13"] } }] : []),
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
  ],
  // Test the production build, not the dev server
  webServer: {
    command: `npm run build && npm run preview -- --port ${PORT} --strictPort`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
