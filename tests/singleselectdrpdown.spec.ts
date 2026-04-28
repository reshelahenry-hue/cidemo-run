import { test,expect, Locator} from '@playwright/test';

test("verifying dropdowns", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //select option from the dropdown(4 ways)
    await page.locator("#country").selectOption('India');//using visible text
    await page.locator("#country").selectOption({value:'canada'});//using value
    await page.locator("#country").selectOption({label:'Canada'});//using label
    await page.locator("#country").selectOption({index:3});//using index
    
    //check no of options in the dropdown
    const dropoption:Locator=page.locator("#country option");
    // i need to count 
    await expect(dropoption).toHaveCount(10);

    //check an option present in the dropdown
    const checking:string[]=(await dropoption.allTextContents()).map(Text=>Text.trim())//map is ued to trim the array text
    console.log(checking)//it will print it in terminal
    expect(checking).toContain('Japan');//it will check japan is present in the option

    //printing all option from the dropdown
    for(const check of checking){
        console.log(check)
    }


})