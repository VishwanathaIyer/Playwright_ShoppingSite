import { test, expect, chromium, Page } from "@playwright/test";
import { loginUserHelper } from "../MarketPlaceLoginHelper/loginUserHelper.page";
import { shoppingItems } from "../MarketPlacePageObjects/shoppingItems.page";
var registerUser = require('../../../Playwright Project/PlaywrightTest/MarketPlaceDatas/RegisterUserData.json');
var errorMessage = require('../../../Playwright Project/PlaywrightTest/MarketPlaceDatas/RegisterUserErrorMessages.json');
var itemsMenu = require('../../../Playwright Project/PlaywrightTest/MarketPlaceDatas/ItemsMenu.json');

test.describe("Shopping items test spec", async () => {
    test.describe.configure({ mode: "serial" });

    let context;
    let page;
    let loginUser;
    let shopping;

    test.beforeAll(async () => {
        const browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        loginUser = new loginUserHelper(page);
        shopping = new shoppingItems(page);
    })

    test("Login in with the registered user and verify if we are able to login", async () => {
        await loginUser.loginFunction();
        await page.waitForTimeout(2000);
        //assert
        await expect(page.getByText(registerUser.loginMessage)).toBeVisible();
    });

    test("Click on the main menu, open the Apple screen and verify if we are on the correct screen", async () => {
        await shopping.megaMenuDropDown.hover();
        await shopping.appleMenu.click();
        //assert
        await expect(shopping.appleListTitle).toBeVisible();
    })

    test("Click on sort by dropdown, choose low to high option and verify if the option is selected", async () => {
        await shopping.sortbyDropDown.selectOption({ index: shopping.lowtoHighDropDownOption });
        //assert
        await expect(await shopping.dropdownSelectedValue.textContent()).toContain(itemsMenu.lowtohigh);
    })

    test("Hover over an item and verify the menu options are present with the tool tip", async () => {
        await shopping.iPodItemMenu.hover();
        //assert
        await expect(shopping.addtoCartButton.nth(0)).toBeVisible();
        await expect(shopping.wishListButton.nth(0)).toBeVisible();
        await expect(shopping.quickViewButton.nth(0)).toBeVisible();
        await expect(shopping.compareButton.nth(0)).toBeVisible();
    })

    test("Search for a product and verify the functionality of the search bar", async () => {
        await shopping.searchBar.type(itemsMenu.ipodSearch);
        await page.keyboard.press("Enter");
        //assert
        await expect(shopping.searchResult.nth(0)).toBeVisible();
    })

    test("Add an item and verify the item added toaster", async () => {
        await page.waitForSelector('.carousel-inner', { state: "visible" });
        await shopping.iPodItemMenu.hover();
        await shopping.addtoCartButton.nth(0).click();
        //assert
        await expect(shopping.itemAddedAlert).toBeVisible();
    })

    test("Click on the cart item and verify if the cart menu is shown with final cost, edit and checkout buttons", async () => {
        await shopping.cartIcon.click();
        //assert
        await expect(shopping.cartMenu).toBeVisible();
        await expect(shopping.checkoutButton).toBeVisible();
    })

    test("Click on checkout button and verify the billing details screen", async () => {
        await shopping.checkoutButton.click();
        //assert
        await expect(shopping.checkoutBillingAddress).toBeVisible();
    })

    test("Click on continue without adding billing details and verify if the validation messages are shown", async () => {
        await shopping.continueCheckoutButton.click();
        await page.waitForSelector('.invalid-feedback', { state: "visible" })
        //assert
        await expect(page.getByText(errorMessage.firstNameRequiredMessage)).toBeVisible();
        await expect(page.getByText(errorMessage.lastNameRequiredMessage)).toBeVisible();
        await expect(page.getByText(errorMessage.cityRequiredMessage)).toBeVisible();
        await expect(page.getByText(errorMessage.postCodeRequiredMessage)).toBeVisible();
        await expect(page.getByText(errorMessage.addressRequiredMessage)).toBeVisible();
    })

})