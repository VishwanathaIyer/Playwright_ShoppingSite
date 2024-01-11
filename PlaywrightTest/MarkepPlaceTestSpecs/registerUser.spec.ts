import { test, chromium, expect, Page } from "@playwright/test";
import { registerUserPageObject } from "../MarketPlacePageObjects/registerUser.page";
var errorMessage = require('../../../Playwright Project/PlaywrightTest/MarketPlaceDatas/RegisterUserErrorMessages.json');
var registerUser = require('../../../Playwright Project/PlaywrightTest/MarketPlaceDatas/RegisterUserData.json');

test.describe("Registering the user test flow", async () => {
    test.describe.configure({ mode: "serial" });

    let context;
    let page;
    let regUserPO;

    test.beforeAll(async () => {
        const browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        regUserPO = new registerUserPageObject(page);
    });

    test("Go to the test page and assert if we are on the right website", async () => {
        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
        //assert
        await expect(regUserPO.pageTitle).toBeVisible();
    });

    test("Click on Myaccount --> Register user and assert if we are redirected to correct screen", async () => {
        await regUserPO.myAccountButton.hover();
        await page.waitForTimeout(1000);
        await regUserPO.registerDropDownButton.click();
        //assert
        await expect(page.getByText("Register Account")).toBeVisible();
    });

    test("Verify the text box validations, in the registration screen", async () => {
        await regUserPO.continueButton.click();
        //assert
        await expect(page.getByText("First Name must be between 1 and 32 characters!")).toBeVisible();
        await expect(page.getByText(errorMessage.lastNameRequiredMessage)).toBeVisible();
        await expect(page.getByText(errorMessage.emailValidationMessage)).toBeVisible();
    });

    test("Input all the fields for registration, click on continue and verify the screen", async () => {
        await regUserPO.firstNameTextBox.type(registerUser.firstName);
        await regUserPO.lastNameTextBox.type(registerUser.lastName);
        await regUserPO.emailTextBox.type(registerUser.email);
        await regUserPO.telephoneTextBox.type(registerUser.telephone);
        await page.waitForTimeout(1000);
        await regUserPO.passwordTextBox.type(registerUser.password);
        await regUserPO.passwordConfirmTextBox.type(registerUser.password);
        await regUserPO.radioButton.click();
        await regUserPO.privacyPolicyCheckBox.click();
        await regUserPO.continueButton.click();
        await page.waitForTimeout(1000);
        //assert
        await expect(page.getByText(registerUser.successfulRegistrationMessage)).toBeVisible();
    });

    test("Verify the login screen is visible, once you click on the continue", async () => {
        await regUserPO.continueButton.click();
        //assert
        await expect(page.getByText(registerUser.loginMessage)).toBeVisible();
    })

    // test("Enter the registered email and password and verify the screen")
})