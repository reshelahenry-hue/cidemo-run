//Array → allows duplicates
// Set → does NOT allow duplicates
//Tuple → allows duplicates (like array)
import { test,expect, Locator} from '@playwright/test';

test("verifying dropdowns", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const viewing:Locator=page.locator("#colors option");
    const checking:string[]=(await viewing.allTextContents()).map(Text=>Text.trim())

   //for set we need to use (new) keyword

   const myset=new Set();//set which allow duplicate
   const myarr:string[]=[];//array not allow duplicate

   for(const texts of checking){
    if(myset.has(texts)){//if myset has the text it(text) will push to the duplicate (array)
        myarr.push(texts)
    }else{
        myset.add(texts)//if myset does not have the text it will add to the set
    }
   }
   console.log('the option are:',myarr)
})