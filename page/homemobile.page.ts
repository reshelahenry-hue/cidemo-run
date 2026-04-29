import { Page, Locator, expect } from '@playwright/test';

export class Homemobile {
    readonly pag: Page;
    readonly nexus: Locator;
    readonly addcart: Locator;

    constructor(pages: Page) {
        this.pag = pages;
        this.nexus = pages.locator("//a[normalize-space()='Nexus 6']");
        this.addcart = pages.locator(".btn.btn-success.btn-lg");
    }

    async clickonnexus() {
        await this.nexus.click();
    }

    async expextedurl() {
        await expect(this.pag).toHaveURL("https://www.demoblaze.com/prod.html?idp_=3");
    }

    async addProductToCart() {

        // handle alert properly
        this.pag.once('dialog', async dialog => {
            await dialog.accept();
        });

        await this.addcart.click();
    }
}