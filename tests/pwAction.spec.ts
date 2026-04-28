import { test,expect, Locator} from '@playwright/test';
//Text Box/Input Box
test("Test input actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const textBox:Locator=page.locator("input#name");
    await expect(textBox).toBeVisible();//to check the text is visible
    await expect(textBox).toBeEnabled();//to check we can click it 
    const maxlength:String|null=await textBox.getAttribute("maxlength");//Return value of max length
    expect(maxlength).toBe("15");
    await textBox.fill("Reshela H");
    const enteredValue:String=await textBox.inputValue();
    console.log("Input value of the First Name:",enteredValue);//return the input value of thr text box
    expect(enteredValue).toBe("Reshela H");

    await page.waitForTimeout(2000);
})
//Radio Button
test("Test Radio Button", async ({ page }) => {//.only --the test only will bw run
    await page.goto("https://testautomationpractice.blogspot.com/");
    const radiobutton:Locator=page.locator("#male");
    await expect(radiobutton).toBeVisible();
    await expect(radiobutton).toBeEnabled();
    await expect(radiobutton).toBeChecked();//it will check if the radio button is cliked or not
    await radiobutton.check();//use to click the radio button
    await expect(radiobutton).toBeChecked();
})
//Checkboxes
test.only("Test checkbox action", async ({ page }) => {//.only --the test only will bw run
    await page.goto("https://testautomationpractice.blogspot.com/");
    //1.select a particular test
    const checbox:Locator=page.getByLabel('Sunday');
    await checbox.check();//it will click the checkbox
    await expect(checbox).toBeChecked();//it will check whether it is clicked or not

    //map() = take array → modify each value → return new array
    //length--used for array/string
    //count--used for locator
 
    //2.select all checkboxes
    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];//This is array of strings
    const checkclick:Locator[]=days.map(index=>page.getByLabel(index));//const checkboxes = days.map(day => page.getByLabel(day)); Now it becomes:
    expect(checkclick.length).toBe(7);
    //'Sunday' → Locator
    //'Monday' → Locator
    //'Tuesday' → Locator
    for(const box of checkclick){
        await box.check()//click al checkboxes
        await expect(box).toBeChecked();//check whether all checkboxes are clicked(positive)
    }
    //3.unselect last 3 checkboxes
     for(const box of checkclick.slice(-3)){//cut a portion and return a new array/string
        await box.uncheck()//it will uncheck(unclick) the last 3 boxes
        await expect(box).not.toBeChecked();}
     //used for negative(it is unchecked or not)

    //4. if check means unckeck it and if uncheck mean check it 
    for(const box of checkclick){
    if(await box.isChecked()){
        await box.uncheck()//it will uncheck(unclick) the last 3 boxes
        await expect(box).not.toBeChecked();//used for negative(it is unchecked or not)
 }else{
        await box.check()//click al checkboxes
        await expect(box).toBeChecked();

 }
    }
    //5. randomly i need to select(1,3,6)
    const indexes:number[]=[1,3,6]
    for(const i of indexes){//i =1,3,6
        await checkclick[i].check();//checkclick==all the element selected[i]
        //Round 1 → i = 1  → checkboxes[1]  
        //Round 2 → i = 3  → checkboxes[3]  
        //Round 3 → i = 6  → checkboxes[6]  
        await expect(checkclick[i]).toBeChecked();//check whether the box is clicked
    }
});


