import { test, expect, chromium, Page, Locator } from "@playwright/test"
var itemsMenu = require('../../../Playwright Project/PlaywrightTest/MarketPlaceDatas/ItemsMenu.json');

export class shoppingItems {
    readonly page: Page;
    readonly lowtoHighDropDownOption: number;
    readonly alphabeticOrderDropDown: number;
    readonly dropdownSelectedValue: Locator;
    readonly megaMenuDropDown: Locator;
    readonly appleMenu: Locator;
    readonly appleListTitle: Locator;
    readonly sortbyDropDown: Locator;
    readonly iPodItemMenu: Locator;
    readonly mouseMenu: Locator;
    readonly addtoCartButton: Locator;
    readonly wishListButton: Locator;
    readonly quickViewButton: Locator;
    readonly compareButton: Locator;
    readonly searchBar: Locator;
    readonly searchResult: Locator;
    readonly itemAddedAlert: Locator;
    readonly cartIcon: Locator;
    readonly cartMenu: Locator;
    readonly checkoutButton: Locator;
    readonly checkoutBillingAddress: Locator;
    readonly continueCheckoutButton: Locator;
    readonly billingFirstname: Locator;
    readonly billingLastname: Locator;
    readonly billingAddress: Locator;
    readonly billingCity: Locator;
    readonly billingPostalcode: Locator;
    readonly billingCountry: Locator;
    readonly billingState: Locator;

    constructor(page: Page) {
        this.page = page;

        this.megaMenuDropDown = page.getByText("Mega Menu");
        this.appleMenu = page.getByText("Apple", { exact: true });
        this.appleListTitle = page.getByRole("heading", { name: 'Apple', exact: true });
        this.sortbyDropDown = page.locator("#input-sort-212434");
        this.alphabeticOrderDropDown = 4;
        this.lowtoHighDropDownOption = 6
        this.dropdownSelectedValue = page.locator('//select[@id="input-sort-212434"]//option[@selected="selected"]')
        // this.iPodItemMenu = page.getByTitle(itemsMenu.ipod).nth(0);
        // this.iPodItemMenu = page.locator("//img[@title='iPod Nano']").nth(0);
        this.iPodItemMenu = page.locator(".carousel-inner").nth(0);
        this.mouseMenu = page.getByTitle(itemsMenu.mouse);
        this.addtoCartButton = page.getByTitle("Add to Cart");
        this.wishListButton = page.getByTitle("Add to Wish List");
        this.quickViewButton = page.getByTitle("Quick view");
        this.compareButton = page.getByTitle("Compare this Product");
        this.searchBar = page.getByPlaceholder("Search", { exact: true }).nth(1);
        this.searchResult = page.getByRole("link", { name: itemsMenu.ipodSearchresult });
        // this.itemAddedAlert = page.getByRole("alert", {name:'Success: You have added ', exact:false});
        this.itemAddedAlert = page.getByText("Success: You have added");
        this.cartIcon = page.locator("//a[@href='#cart-total-drawer'][@aria-controls='cart-total-drawer']").nth(0);
        this.cartMenu = page.getByText('Total:', { exact: true });
        this.checkoutButton = page.getByRole("button", { name: 'Checkout' });
        this.checkoutBillingAddress = page.getByRole("heading", { name: 'Billing Address', exact: true });
        this.continueCheckoutButton = page.getByText('Continue');
        this.billingFirstname = page.getByPlaceholder("First Name");
        this.billingLastname = page.getByPlaceholder("Last Name");
        this.billingAddress = page.getByPlaceholder("Address 1");
        this.billingCity = page.getByPlaceholder("City");
        this.billingPostalcode = page.getByPlaceholder("Post Code");
        this.billingCountry = page.locator("#input-payment-country");
        this.billingState = page.locator("#input-payment-zone");

    }
}