import { test, Locator, expect } from '@playwright/test';

test('verify multiselect dropdown', async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
    //select option from the dropdown(4 ways)
    await page.locator("#colors").selectOption(['Red','Blue','Green']);//using visible text
    await page.locator("#colors").selectOption(['red','blue','yellow']);//using value
    await page.locator("#colors").selectOption([{label:'Red'},{label:'White'},{label:'Yellow'}]);//using label
    await page.locator("#colors").selectOption([{index:0},{index:1},{index:2},{index:3}]);//using index
    
    //check no of options in the dropdown
    const dropoption:Locator=page.locator("#colors option");
    // i need to count 
    await expect(dropoption).toHaveCount(7);

    //check an option present in the dropdown
    const checking:string[]=(await dropoption.allTextContents()).map(Text=>Text.trim())//map is ued to trim the array text
    console.log(checking)//it will print it in terminal
    expect(checking).toContain('Blue');//it will check japan is present in the option

    //printing all option from the dropdown
    for(const check of checking){
        console.log(check)
    }


})
