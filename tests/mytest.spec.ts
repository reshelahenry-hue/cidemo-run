import { test,expect, Locator} from '@playwright/test';

test("Dynamic input actions", async ({ page }) => {
   await page.goto("https://testautomationpractice.blogspot.com/")
   //page.locator('#email').fill('reshela34@gmail.com');
   await page.locator('.form-control').fill('reshela34@gmail.com')
})