import { test, expect, chromium, Page } from "@playwright/test";
import { shoppingCartElements } from "../PageObjects/shoppingCartElements.page";
import { loginHelperHelper } from "../login_SignUpHelper/loginHelper.page";
import exp from "constants";

test.describe('Shopping cart test spec', async () => {
    test.describe.configure({ mode: 'serial' });

    let context;
    let page;
    let shoppingElements;
    let loginHelper;

    test.beforeAll(async () => {
        const browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext({});
        page = await context.newPage();
        shoppingElements = new shoppingCartElements(page);
        loginHelper = new loginHelperHelper(page);
    });

    test('Login with the user', async () => {
        await loginHelper.loginInFunc();
        //assert
        await expect(shoppingElements.productImage).toBeVisible();
    })

    test('Add an item and verify the item added popup', async () => {
        await shoppingElements.addtoCArtButton.nth(0).click();
        //assert
        await expect(shoppingElements.addedItemText).toBeVisible();
        await expect(shoppingElements.continueShoppingButton).toBeVisible();
    })

    test('Click on view cart and verify the added items and cost', async () => {
        await shoppingElements.viewCartLink.click();
        //assert
        await expect(shoppingElements.priceText).toBeVisible();
    })

    test('Click on checkout cart and verify the billing and delivery address', async () => {
        await shoppingElements.proceedToCheckout.click();
        //assert
        await expect(shoppingElements.addressMenu).toBeVisible();
        await expect(shoppingElements.billingAddressMenu).toBeVisible();
    })

})