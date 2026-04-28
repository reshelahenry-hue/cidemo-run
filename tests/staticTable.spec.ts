import { test,expect, Locator} from '@playwright/test';

test("Static input actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const productTable:Locator=page.locator("table[name='BookTable'] tbody")
    await expect(productTable).toBeVisible();

    //count num of rows
    const rows:Locator=productTable.locator("tr");//returns all the rows including header
    await expect(rows).toHaveCount(7);//we are expecting 7 rows
    console.log(rows);//app 1

    const pageCount:number=await rows.count();
    console.log(pageCount);
    expect(pageCount).toBe(7);//app 2

    //count num of column
    const column:Locator=rows.locator("th");//This is know as chaining of locators
    await expect(column).toHaveCount(4);//app 1

    const pagecolumn:number=await column.count();
    console.log(pagecolumn);
    expect(pagecolumn).toBe(4);//app 2

    //Read all data from 6 row
    const allrows:Locator=rows.nth(6).locator("td");
    const rowstext:String[]=await allrows.allInnerTexts();
    console.log("the rows are:", rowstext);

    // using of loop
    for(let text of rowstext){ // text is a variable name i have given
        console.log(text);//rowText = ['Learn Java', 'Mukesh', 'Java', '500']



    }

    //read all data from the table(excluding header)
    const alldata:Locator[]=await rows.all();
    for(let row of alldata.slice(1)){//slice skip header row
        const rowtext=await row.locator('td').allInnerTexts();
        console.log(rowtext.join('\t'));//join() is a JavaScript array method that combines all array items into a single string, with a separator between them.
    }
     
    //print book name where author name is mukesh
    




    


})