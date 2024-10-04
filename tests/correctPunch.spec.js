const { test, expect } = require('@playwright/test');

const admin = {
    fullName: 'Aaron Hamilton',
    username: 'Admin',
    password: '8cTW2tXu@K'
}


test.beforeEach('login', async ({ page }) => {
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

test('correct a punch on time card for an employee', async ({ page }) => {

    //await page.waitForTimeout(10000);
    
    //await page.locator('data-automation-id="menu_attendance_viewAttendancePayHoursReport"').nth(0).click();
    //mentor: cleaner syntax below?
    //await page.locator('li#left_menu_item_23').locator('[data-automation-id="menu_attendance_viewAttendancePayHoursReport"]').nth(0).click();

    await page.locator('[data-automation-id="menu_attendance_viewAttendancePayHoursReport"]').nth(0).click();


    //await page.getByLabel('Employee Name').fill('Robert Craig');

    //STUDY: getByRole('input') also possible here
const searchEmployee = await page.locator('oxd-multiselect[items="employeesForMultiSelect"]').locator('input');
await searchEmployee.fill('Robert Craig');
//await searchEmployee.click();

    //await page.keyboard.press('Enter');
   // await expect(page.locator('a').filter('[text="Robert Craig"]')).toBeVisible();

   //Mentor "locators must belong to the same frame" 
   //await page.locator('.contains-employee-id').locator({has: page.getByText('Robert Craig')}).click()
await page.locator('.contains-employee-id').click();

    //await expect(page.locator('a[ng-if="value.format"]').getByText('Robert Craig')).toBeVisible();
    await expect(page.locator('a[ng-if="value.format"]').locator('text="Robert Craig"')).toBeVisible();
    

    //TODO: await page.locator('a[ng-if="value.format"]').getByText('Robert Craig').click();
    
  });

//   test.afterAll('reset timecard', async ({ page }) => {
  
    
//   });
  

//page.$('text=Example')