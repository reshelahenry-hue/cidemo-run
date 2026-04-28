//page.getByRole() to locate by explicit and implicit accessibility attributes.
//page.getByText() to locate by text content.
//page.getByLabel() to locate a form control by associated label's text.
//page.getByPlaceholder() to locate an input by placeholder.
//page.getByAltText() to locate an element, usually image, by its text alternative.
//page.getByTitle() to locate an element by its title attribute.
//page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


import { test,expect, Locator} from '@playwright/test';

test("Playwright locators", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/")

    const logo:Locator=page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();
    


})
test("Playwright locators", async ({ page }) => {
    //app 1
    const text:Locator=page.getByText("Welcome to our store")
    await expect(text).toBeVisible();
    //app 2
    await expect(page.getByText("Welcome to our store")).toBeVisible();
})

test("Playwright locators", async ({ page }) => {
    page.getByRole("link",{name:'Register'}).click();
    await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
    
})

test("Playwright locators", async ({ page }) => {
    page.getByLabel("First name:").fill('Reshela');
    page.getByLabel("Last name:").fill('Henry');
    page.getByLabel("Email:").fill('reshelahenry@gn=mail.com');
})

test("Playwright locators", async ({ page }) => {
    page.getByPlaceholder("Search store").fill('Smartphone');
})   