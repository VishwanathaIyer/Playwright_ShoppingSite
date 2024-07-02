import { test, expect, chromium, Page } from "@playwright/test";

test.describe("Multiple Elements test spec", async () => {
    test.describe.configure({ mode: "serial" });

    let context;
    let page;

    test.beforeAll(async () => {
        const browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
    })

    test("Go to page and click on radio buttons", async () => {
        try {
            await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
            await page.getByRole('radio').nth(2).check();

            await expect(page.getByRole('radio').nth(1)).not.toBeChecked();
            await expect(page.getByRole('radio').nth(2)).toBeChecked();
        }
        catch (err) {
            console.log("Error is ", err);
        }
    })
    test("Go to page and click on 3rd radio buttons", async () => {
        try {
            await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
            await page.getByRole('radio').nth(3).click();

            await expect(page.getByRole('radio').nth(3)).toBeChecked();
        }
        catch (err) {
            console.log("Error is ", err);
        }
    })

    test('choose a value in drop down and verify if its selected', async() =>{
        await page.locator("#fruit-selects").selectOption({value : 'pear'});
        await page.waitForTimeout(2000);
        await page.evaluate(() => {
            const dropdown = document.querySelector('#fruit-selects') as HTMLSelectElement;
            const selectedOption = dropdown.options[dropdown.selectedIndex].value;
            console.log("value is ", selectedOption);
            page.locator.lc();
          });
        
    })

});