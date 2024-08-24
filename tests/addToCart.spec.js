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


await page.locator('.inventory_item_description')
.filter({ hasText: 'Sauce Labs Fleece Jacket' })
    .getByRole('button', { name: 'Add to cart' })
    .click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    
    await page.locator('.shopping_cart_badge').click();
    //assert Fleece is in cart

    const inventoryItem = await page.locator('.inventory_item_name');
    await expect(inventoryItem).toHaveText('Sauce Labs Fleece Jacket');

    //MENTOR:is it best practices to inlcude this line?  Is there a cleaner way to write it?
    await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();


    //assert no other items in cart

    await expect(inventoryItem).toHaveCount(1);

});
