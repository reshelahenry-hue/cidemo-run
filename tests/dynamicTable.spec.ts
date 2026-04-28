import { test,expect, Locator} from '@playwright/test';

test("Dynamic input actions", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table:Locator=page.locator("table.table tbody");
    expect(table).toBeVisible();


    //select all rows and find no of rows
    const rows:Locator[]=await table.locator("tr").all();
    console.log(rows.length);//(.length--because the locator is in array)
    expect(rows).toHaveLength(4);
    

    //for chrome process get value of cpu load
   let pagerow='';
   for(const row of rows ){
    const pages:String=await row.locator("td").nth(0).innerText();
    if(pages==="chrome"){
        const pagerow:String=await row.locator('td:has-text("%")').innerText();
        console.log(pagerow);
        break;

    }
   }


   //step 2 compare the value with the yellow table
   const yellotable:string=await page.locator("#chrome-cpu").innerText();
   console.log(yellotable);
   if(yellotable.includes (pagerow)){
    console.log("The value is equal");

   }else{
     console.log("The value is not equal");

   }
   expect(yellotable).toContain(pagerow);

   




})