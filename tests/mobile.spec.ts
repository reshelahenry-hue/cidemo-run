import { test, Locator, expect } from '@playwright/test'
import { loginmobile } from '../page/loginmobile.page'
import { Homemobile} from '../page/homemobile.page'
import { cartemobile } from '../page/cartmobile.page';
test('test login', async ({ page }) => {


    const login=new loginmobile(page);
    const home=new Homemobile(page);
    const cart=new cartemobile(page);

    await login.gotologinpage();
    await login.loginbuttonclick('Selin','selin123');
    await home.clickonnexus();
    await home.expextedurl();
    await home.addProductToCart();
    await cart.clickonccart();
    await page.waitForTimeout(5000);



});

