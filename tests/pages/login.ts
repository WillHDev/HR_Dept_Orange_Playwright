import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submitBtn: Locator;
    constructor( page: Page ) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.submitBtn = page.locator('[type=submit]');
    }
    //why does line 16 need 'this' to work?
    async goToUrl() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username: string, password: any) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitBtn.click();
    }
}

