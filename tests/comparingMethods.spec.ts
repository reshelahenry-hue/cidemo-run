import { test,expect, Locator} from '@playwright/test';

test("verify comparing method", async ({ page }) => {
    //innertext va textcontent
    await page.goto("https://demowebshop.tricentis.com/");
    const products:Locator=page.locator(".product-title");
    const count=await products.count();

    for(let i=0;i<count;i++){
        const productName:string | null=await products.nth(i).textContent();
        console.log(productName);
    }


    //allinnertext vs alltextcontent
    const productNames:String[]=await products.allTextContents();
    console.log(productNames);
    const productsTrimmed:String[]=productNames.map(text=>text.trim());
    console.log(productsTrimmed);

    //all()---convert locator into locator type of an array(locator[])
    //all method returns array of locators
    const productLocator:Locator[]=await products.all();
    console.log(productLocator);
    console.log(await productLocator[1].innerText());//for single atatement innertext u want means use this
/
//for of loop
    for(let productLoc of productLocator){
        console.log(await productLoc.innerText())

    }

    //for in loop
    for(let i in productLocator){
        console.log(await (i))

    }
})