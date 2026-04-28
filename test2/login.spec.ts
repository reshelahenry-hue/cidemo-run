import { test, chromium } from '@playwright/test';

test("Login test demo", async ({}) => {

    const browser = await chromium.launch({
       headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
       // Hover on My account
    await page.locator('li.dropdown-hoverable a.nav-link:has-text("My account")').hover();

    // Click Login from dropdown
    await page.locator('li.dropdown-hoverable a:has-text("Login")').click();
    await page.fill('[name="email"]', 'reshela.henry@capestart.com');
    await page.fill('[name="password"]', '12345678');
    await page.click('input[value="Login"]');



    await browser.close(); 

});