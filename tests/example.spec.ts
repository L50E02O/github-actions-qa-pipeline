import { test, expect } from '@playwright/test';

/**
 * Pruebas de humo contra la documentacion de Playwright.
 * Demuestran selectores robustos (getByRole, getByText) y assertions basicas.
 */
test.describe('Playwright Docs - Smoke', () => {
  test('debe cargar la pagina principal de Playwright', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('debe mostrar el enlace de Get Started', async ({ page }) => {
    await page.goto('/');
    const getStarted = page.getByRole('link', { name: /get started/i });
    await expect(getStarted).toBeVisible();
    await getStarted.click();
    await expect(page).toHaveURL(/intro/);
  });

  test('debe contener texto sobre testing', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/testing/i).first()).toBeVisible();
  });
});
