import { test,expect, Locator} from '@playwright/test';

test("Playwright locators", async ({ page }) => {

   await page.goto("https://www.w3schools.com/html/html_tables.asp")

   const germanyCell:Locator=page.locator("//td[text()='Germany']/self::td");
   await expect (germanyCell).toHaveText('Germany')
  
})