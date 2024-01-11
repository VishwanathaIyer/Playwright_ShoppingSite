import { expect, Page, chromium } from "@playwright/test";
import { loginElements } from '../PageObjects/loginElements.page';

export class loginHelperHelper {
    readonly page: Page;
    readonly loginInFunc: Function;

    constructor(page: Page) {
        this.page = page;
        let loginele = new loginElements(page);

        this.loginInFunc = async function () {
            await page.goto('https://www.automationexercise.com/');
            await loginele.signupButton.click();
            await page.waitForTimeout(2000);
            await loginele.loginEmailid.fill("adedAQSrfsyy@g.com");
            await loginele.loginPassword.fill("abcd");
            await loginele.signinButton.click();
        }
    }
}