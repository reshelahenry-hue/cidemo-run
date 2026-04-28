import { test,expect, Locator} from '@playwright/test';

test("Playwright locators", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    const checking:Locator=page.locator("input#small-searchterms");
    await checking.fill("Reshela");
    await page.waitForTimeout(5000);


})