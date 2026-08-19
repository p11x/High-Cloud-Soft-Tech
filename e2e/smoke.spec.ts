import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/High Cloud Soft Tech/);
});

test('navigation to contact page works', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Contact Us');
  await expect(page).toHaveURL(/.*\/contact/);
  await expect(page.locator('h1')).toContainText('Contact Us');
});
