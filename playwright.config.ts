import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3100",
  },
  webServer: {
    command: "npm run build && npm run start -- -p 3100",
    url: "http://localhost:3100",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  // WebKit is intentionally not included as a project: this build's WebKit
  // binary is incompatible with the current sandbox (fails on every test at
  // page-creation with "Protocol error: Unknown setting: PushAPIEnabled").
  // Mobile layout/behavior is still covered via a mobile viewport under
  // chromium (see the "Mobile navigation" describe block in
  // tests/e2e/navigation.spec.ts). Re-add a webkit project once Playwright's
  // WebKit build is confirmed to work in the target environment.
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
