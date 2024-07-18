const {test, expect} = require('@playwright/test');

// Write a test
test('Add item to cart successfully', async({page}) =>{
    // Go to URL
    await page.goto('https://www.amazon.com/');
  
    // await page.getByRole('input', { name: 'username', exact: true }).click();
    await page.getByPlaceholder('Search Amazon').fill('sauna hat');

// why didn't this work?  await page.getByRole('input', {id: 'nav-search-submit-button'}).click();

//await page.locator('#nav-search-submit-button').click();
//await page.getByRole('input', { type: 'submit' }).click();
await page.locator("[type=submit]").click();

// why didn't this work:  await page.locator('#nav-search-submit-button').click();

await page.getByText('Sauna Hat Vaporarium Hat Sauna Wool Hat Russian Banya Cap for Men Women Bath Accessories', { exact: true }).click();

//await page.getByRole('input', { id: 'add-to-cart-button' }).click()
await page.locator(':nth-match(:text("Add to Cart"), 1)').click();
await expect(getByRole('heading')).toHaveText('Added to Cart').toBeVisible();


    await page.waitForTimeout(5000);

})
