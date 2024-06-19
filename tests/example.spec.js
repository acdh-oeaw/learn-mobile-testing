// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/mobile-testing-demo/);
});

test('has crossfade image', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');
  let h1 = await page.locator("h1");
  const h1FontFamily = await h1.evaluate((element) => window.getComputedStyle(element).getPropertyValue("font-family"))
  console.log(h1FontFamily)
  await expect(h1).toHaveCSS("font-family", h1FontFamily)
});

