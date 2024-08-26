const {test, expect} = require('@playwright/test');
//const { CLIENT_RENEG_LIMIT } = require('tls');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator("[type=submit]").click();

    await expect(page).toHaveTitle('Swag Labs');
   // await page.waitForTimeout(5000);
  });

test('Add item to cart successfully', async({page}) =>{

//Get fleece price 
    const fleecePrice = await page.locator('.inventory_item_description')
        .filter({ hasText: 'Sauce Labs Fleece Jacket' })
        .locator('.inventory_item_price').textContent();


//Add fleece to cart
    await page.locator('.inventory_item_description')
        .filter({ hasText: 'Sauce Labs Fleece Jacket' })
        .getByRole('button', { name: 'Add to cart' })
        .click();

//Assert only 1 item in cart
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

//Assert Fleece is in cart
    await page.locator('.shopping_cart_badge').click();
    const inventoryItem = await page.locator('.inventory_item_name');
    await expect(inventoryItem).toHaveText('Sauce Labs Fleece Jacket');
 
//MENTOR:is it best practices to inlcude this line?  Is there a cleaner way to write it?
    await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
    const cartSubtotal = await page.locator('.inventory_item_price').textContent();
    console.log(cartSubtotal);


    //Mentor
    // await page.waitForTimeout(4000);
    // await expect(page.locator('.inventory_item_price').textContent()).toEqual(fleecePrice);


//Assert no other items in cart
    await expect(inventoryItem).toHaveCount(1);

});
