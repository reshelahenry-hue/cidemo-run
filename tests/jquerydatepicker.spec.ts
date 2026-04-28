import { test,expect, Locator} from '@playwright/test';

test("verify datepickers works", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput:Locator=page.locator("#datepicker");
    await dateInput.fill("07/19/2004");
    await page.waitForTimeout(2000);


})