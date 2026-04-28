import { test, Locator, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const boxtype:Locator= page.locator("input#name");
    await expect(boxtype).toBeVisible();
    await expect(boxtype).toBeEnabled();
    const typinglength:string|null= await boxtype.getAttribute("maxlength");
    expect(typinglength).toBe('15');
    await boxtype.fill("Assumpta H");
    const entername:string= await boxtype.inputValue();
    console.log("The name is :", entername);
    expect(entername).toBe("Assumpta H");
})