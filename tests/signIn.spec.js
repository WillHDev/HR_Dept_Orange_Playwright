const {test, expect} = require('@playwright/test');
import { LoginPage } from './pages/login';

const user1 = {
    username: 'standard_user',
    password: 'secret_sauce'
}

test('Login success', async({page}) =>{

    const loginPage = new LoginPage(page);
    const { password, username } = user1
    await loginPage.goToUrl();
    await loginPage.login(username, password);
    await expect(page).toHaveTitle('Swag Labs');

})



