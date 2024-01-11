import { chromium, Locator, Page } from "@playwright/test";
import { registerUserPageObject } from "../MarketPlacePageObjects/registerUser.page";
var registerUser = require('../../../Playwright Project/PlaywrightTest/MarketPlaceDatas/RegisterUserData.json');

export class loginUserHelper {
    readonly page: Page;

    readonly loginFunction: Function;

    constructor(page: Page) {
        this.page = page;
        var loginUser = new registerUserPageObject(page);

        this.loginFunction = async function () {
            await page.goto(registerUser.testUrl);
            await loginUser.myAccountButton.hover();
            await loginUser.loginDropDownButton.click();
            await loginUser.loginId.fill(registerUser.email);
            await loginUser.loginPassword.fill(registerUser.password);
            await loginUser.loginButton.click();
        }
    }
}