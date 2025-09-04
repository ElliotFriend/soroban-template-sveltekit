import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Hello, Stellar SvelteKit!' })).toBeVisible();
});

test('index page has expected connect buttons', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Signup' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
})
