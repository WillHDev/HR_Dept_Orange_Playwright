const { test, expect } = require('@playwright/test');

test.beforeEach('login', async ({ page }) => {

  const { fullName, username, password } = admin;  
  await page.goto('https://william77-trials714.orangehrmlive.com/');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole( 'button', { type: 'submit' }).click();
  await expect(page.locator('a[class="name"]').getByText(fullName)).toBeVisible();
  
});

test('leave of absence added', async ({ page }) => {

    await page.goto('https://william77-trials714.orangehrmlive.com/client/#/leave/view_leave_list');
    await page.getByText('Assign Leave').nth(1).click();
    const employee2 = await page.getByPlaceholder('Type for hints...');
    await page.waitForTimeout(5000);
    await employee2.fill('Adrien');
    await page.locator('text="Adrien Renault"').click();
    await page.locator('input[id="leave.assign_fromDate"]').fill('2024-12-10');
    const toDate = await page.locator('input[id="leave.assign_toDate"]');
    await toDate.fill('');
    await toDate.fill('2024-12-14');
    await page.mouse.wheel(0, 200);
    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
    await page.waitForTimeout(5000);
    await page.getByText('Leave Calendar').nth(1).click();   
    await page.waitForTimeout(5000);
    await page.waitForTimeout(7000);
    const nextMonthArrow = await page.locator('li[class="next"] i');
    await nextMonthArrow.click();
    await nextMonthArrow.click();
    await expect(page.locator('[class="fc-day fc-widget-content fc-tue fc-future dateCell"][data-date="2024-12-10"]')).toBeVisible();
    test.setTimeout(55000);
  });

  
const admin = {
  fullName: 'Aaron Hamilton',
  username: 'Admin',
  password: '8cTW2tXu@K'
}
