const {test, expect} = require('@playwright/test');

import { CatalogPage } from './pages/catalogPage';


test.beforeEach(async ({ page }) => {

    //sign in
    await page.goto('https://www.saucedemo.com/');
  
    // await page.getByRole('input', { name: 'username', exact: true }).click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator("[type=submit]").click();

    //await page.locator('button:text("Login")').click();

    await expect(page).toHaveTitle('Swag Labs');

   

    await page.waitForTimeout(5000);

    //add item to cart
//     await page.locator('.inventory_item_description')
// .filter({ hasText: 'Sauce Labs Fleece Jacket' })
//     .getByRole('button', { name: 'Add to cart' })
//     .click();


const Catalog = new CatalogPage(page);
await Catalog.addToCart('Sauce Labs Fleece Jacket');

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
  

  //zip as a string of integer?

  const SHIPPING_USER_INFO = {
    firstName: 'Charles',
    lastName: 'Waterston',
    zipCode: '55417'
  };

test('Complete checkout successfully', async({page}) =>{

    const { firstName, lastName, zipCode } = SHIPPING_USER_INFO

    await page.getByRole( 'button', { name: 'Checkout' }).click();

    //fill out shipping information form

    await page.getByPlaceholder('First Name').fill(firstName);
    await page.getByPlaceholder('Last Name').fill(lastName);
    await page.getByPlaceholder('Zip/Postal Code').fill(zipCode);
    await page.getByRole('button', { name: 'Continue' })
    .click();

    await page.getByRole('button', { name: 'Finish' })
    .click();
    
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
        
    
    });
    