import { test,expect, Locator} from '@playwright/test';

test("verify simple alert", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //in dialog we can inspect any thing so we can do some assertion 

    page.on('dialog',(dialog)=>{//it is used if any pop up appear
        console.log(dialog.type());//it will print the top of the alert
        console.log(dialog.message);//it will print which type of message does the pop up has
        dialog.accept();//if accept means-ok,if dismiss means-cancel




    })

    await page.locator("#alertBtn").click();

})