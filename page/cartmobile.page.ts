import { Page,Locator,expect } from '@playwright/test';

export class cartemobile{
    readonly paa:Page;
    readonly cartclick:Locator;


    constructor(Resh:Page){
        this.paa=Resh;
        this.cartclick=Resh.locator(".nav-link[href='index.html']")

    }

    async clickonccart(){
        await this.cartclick.click();
    }
}
