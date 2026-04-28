import { test, expect } from '@playwright/test';
const datanames:string[][]=[
    ["reshelahenry@gmail.com","Resh@123","valid"],
    ["invaliduser@gmail.com","Re@123","invalid"],
    ["validuser@gmail.com","Resh","invalid"], 
    ["","","invalid"],
]

test('has title', async ({ page }) => {

})


