const {test, expect} = require('@playwright/test');

// Write a test

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    // await page.getByRole('input', { name: 'username', exact: true }).click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator("[type=submit]").click();

    //await page.locator('button:text("Login")').click();

    await expect(page).toHaveTitle('Swag Labs');

   

    await page.waitForTimeout(5000);
  });
  



test('Add item to cart successfully', async({page}) =>{
    // Go to URL
//     await page.goto('https://www.amazon.com/');
  


await page.locator('.inventory_item_description')
.filter({ hasText: 'Sauce Labs Fleece Jacket' })
    .getByRole('button', { name: 'Add to cart' })
    .click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});
