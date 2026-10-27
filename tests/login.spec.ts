import { test, expect } from '@playwright/test';


const username = process.env.TEST_USERNAME
const password = process.env.TEST_PASSWORD
 

test('Username with invalid characters @smoke', async ({ page, browserName }) => {
  await page.goto("/")
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  
 
// await expect(page.locator('[data-test="error"]')).toBeVisible();
});
