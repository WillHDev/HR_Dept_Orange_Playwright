import { type Locator, type Page } from '@playwright/test';


export class CatalogPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly addToCartBtn: Locator;
    constructor( page: Page ) {
        this.page = page;
        //this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
    }


  async addToCart(item: string) {
    // await this.page.locator('.inventory_item_description')
    //     .filter({ hasText: item });
    // await this.addToCartBtn.click();

      await this.page.locator('.inventory_item_description')
        .filter({ hasText: item })
        .getByRole('button', { name: 'Add to cart' })
        .click();
  }
}
