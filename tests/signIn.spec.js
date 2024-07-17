const {test, expect} = require('@playwright/test');

// Write a test
test('Login successfully', async({page}) =>{
    // Go to URL
    await page.goto('https://www.saucedemo.com/');
  
    // await page.getByRole('input', { name: 'username', exact: true }).click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator("[type=submit]").click();

    //await page.locator('button:text("Login")').click();

    await expect(page).toHaveTitle('Swag Labs');

   

    await page.waitForTimeout(5000);

})


// test('Login successfully', async({page}) =>{
//    
//     await page.goto('https://petstore.octoperf.com/actions/Account.action?signonForm=');
  
//     // await page.getByRole('input', { name: 'username', exact: true }).click();

//     await page.getByRole('input', { name: 'username', exact: true }).fill('UltraRunner');

//     // await page.getByRole('input', { name: 'password', exact: true }).click();

//     await page.getByRole('input', { name: 'password', exact: true }).fill('James82');

//     await page.getByRole('input', { name: 'signon', exact: true }).click();

//     const welcomeMessage = page.locator('WelcomeContent');

//     await expect(welcomeMessage).toHaveText(' Welcome James! ');

//     //await page.waitForTimeout(5000);

// })


