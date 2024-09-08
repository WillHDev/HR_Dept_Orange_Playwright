const { test, expect } = require('@playwright/test');

const admin = {
    fullName: 'Aaron Hamilton',
    username: 'Admin',
    password: '8cTW2tXu@K'
}


test('has title', async ({ page }) => {
  const { fullName, username, password } = admin;  
  await page.goto('https://william77-trials714.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole( 'button', { type: 'submit' }).click();

  // didn't work: Can anchor role be used or is another locator necessary?
  //await expect(page.getByRole('link', { text: fullName })).toBeVisible()

  //await expect(page.getByText(fullName)).toBeVisible();

  await expect(page.locator('a[class="name"]').getByText(fullName)).toBeVisible();
  
});