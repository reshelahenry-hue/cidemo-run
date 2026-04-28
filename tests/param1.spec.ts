import { test, Locator, expect } from '@playwright/test';
const searchterms:string[]=['Laptop','Gift Card','Smartphone','Monitor'];
//app 1
for (const item of searchterms)
    {
 test(`search for ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/search?q=Gift+card");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[class='button-1 search-box-button']").click();
    await expect.soft(page.locator(".product-grid").nth(0)).toContainText(item,{ignoreCase:true});
 });
}
//app 2
/*
searchterms.forEach(item => {
    test(`search for ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/search?q=Gift+card");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[class='button-1 search-box-button']").click();
    await expect.soft(page.locator(".product-grid").nth(0)).toContainText(item,{ignoreCase:true});
 });




    

    


