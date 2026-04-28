import { test, expect } from '@playwright/test';
test.describe('Group1', async () => {//this is used to group atest--describe
test('test 1', async () => {
    console.log("This is test 1...........")
})

test('test 2', async () => {
    console.log("This is test 2...........")
})
})

// if i need to run only one group means in terminal type ==npx playwright test --grep Group1(meand grep(describe title))


 test.describe('Group2', async () => {
test('test 3', async () => {
    console.log("This is test 3...........")
})


test('test 4', async () => {
    console.log("This is test 4...........")
})
})
