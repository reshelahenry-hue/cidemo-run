
//scenario
//login
//find products
//logout

//Login
// add product to Cart
// logout


//close app


import { test, expect,Page} from '@playwright/test';
let page:Page;//writing this to make the page as global

test.beforeAll('open the page', async ({browser}) => {
    page=await browser.newPage();
    page.goto("https://www.demoblaze.com/");
})
test.afterAll('close the page', async () => {
    await page.close();
});

test.beforeEach("login the page",async()=>{
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("reshela");
    await page.locator("#loginpassword").fill("123456");
    await page.locator("button[onclick='logIn()']").click();
})
test.afterEach("logout the page",async()=>{
    await page.locator("logout").click();//do in a application and inspect
})
   



    
    

   

