import {test, expect } from '@playwright/test';

test('Playwright Test1', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    console.log("Added for merge conflict in github in master"); //This is actual line in master
    console.log("This is for merge conflict example in GitHub"); //This is the line form feature3 and corrected during merge conflict
    console.log("This is added for branch example in GitHub");
    console.log("This is added for branch example in GitHub - 2nd commit");
});