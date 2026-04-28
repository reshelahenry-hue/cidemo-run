import { test,expect, Locator} from '@playwright/test';

test("verifying dropdowns", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const viewing:Locator=page.locator("#animals option");
    const data:string[]=(await viewing.allTextContents()).map(text=>text.trim());//this will trim the text
    //if the data not sorted in the original and sorted output will be same
    //const original:string[]=data;
    //const sortedl:string[]=data.sort();//once this sort automattivally the original data also will be sorted(beacuse sort is mutable)
    const original:string[]=[...data];//this... is know as search operator 
    const sorted:string[]=[...data].sort();//this will won't affect the original list
    console.log(original);
    console.log(sorted);

    expect(original).toEqual(sorted);//if original and sorted is equal means the test will get passed



})