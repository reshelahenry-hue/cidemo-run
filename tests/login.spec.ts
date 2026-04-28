import { test, Locator, expect } from '@playwright/test'
import { loginpage } from '../page/loginpages'

test('test login', async ({ page }) => {
    const loginpages=new loginpage(page);

    await loginpages.gotoLoginpage();//press ctrl key
    await loginpages.login('reshela','reshel@123');
    await loginpages.

    
})