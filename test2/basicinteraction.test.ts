import { test} from '@playwright/test';

test("", async ({ page }) => {
    await page.goto("https://www.jotform.com/form-templates/demo-request-form");
    await page.fill('#first_3', 'Reshela');

})