import { expect, Locator, Page } from '@playwright/test';

export class shoppingCartElements {
    readonly page: Page;
    readonly productImage: Locator;
    readonly addtoCArtButton: Locator;
    readonly viewProductButton: Locator;

    readonly productImageinDetailsScreen: Locator;
    readonly productQuantity: Locator;
    readonly addtoCartButtoninDetailsScreen: Locator;
    readonly itemAddedPopUp: Locator;
    readonly viewCartLink: Locator;
    readonly continueShoppingButton: Locator;
    readonly proceedCheckoutButton: Locator;
    readonly cartInfo: Locator;
    readonly cartDeleteButton: Locator;
    readonly placeOrderButton: Locator;
    readonly proceedToCheckout: Locator;
    readonly nameonCardTextBox: Locator;
    readonly cardNumberTextBox: Locator;
    readonly cvcTextBox: Locator;
    readonly expirationMonthTextBox: Locator;
    readonly expirationYearTextBox: Locator;
    readonly downloadInvoiceButton: Locator;
    readonly shoppingContinueButton: Locator;

    readonly availabilityLabel: Locator;
    readonly conditionLabel: Locator;
    readonly brandLabel: Locator;
    readonly addedItemText: Locator;
    readonly cartDescriptionText: Locator;
    readonly priceText: Locator;
    readonly quantityText: Locator;
    readonly totalAmountText: Locator;
    readonly addressMenu: Locator;
    readonly billingAddressMenu: Locator;
    readonly reviewOrderText: Locator;
    readonly paymentLabel: Locator;
    readonly orderPlacedLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productImage = page.locator(".single-products").nth(0);  //css locator
        this.addtoCArtButton = page.getByText("Add to cart");
        this.viewProductButton = page.getByRole('link', { name: "View Product" });
        // this.productQuantity = page.locator("//input[@name='quantity']");


        //product details screen
        this.productImageinDetailsScreen = page.getByAltText("ecommerce website products").nth(0);
        this.productQuantity = page.locator("//input[@name='quantity']");
        this.addtoCartButtoninDetailsScreen = page.getByRole('button', { name: "addtoCartButtoninDetailsScreen" });
        this.itemAddedPopUp = page.locator("//div[@class='modal-content']");
        this.viewCartLink = page.getByRole('link', { name: "View Cart" });
        this.continueShoppingButton = page.getByRole('button', { name: "Continue Shopping" });
        this.cartDeleteButton = page.locator('.cart_delete');
        this.placeOrderButton = page.getByRole('link', { name: "Place Order" });
        this.proceedToCheckout = page.getByText("Proceed To Checkout");
        this.nameonCardTextBox = page.locator("//input[@name='name_on_card']");
        this.cardNumberTextBox = page.locator("//input[@name='card_number']");
        this.cvcTextBox = page.getByPlaceholder('ex. 311');
        this.expirationMonthTextBox = page.getByPlaceholder('MM');
        this.expirationYearTextBox = page.getByPlaceholder('YYYY');
        this.downloadInvoiceButton = page.getByRole('link', { name: "Download Invoice" });
        // this.continueShoppingButtonT = page.getByRole('link', { name: "Continue" });


        //Text locators
        this.addedItemText = page.getByText("Added!");
        this.cartDescriptionText = page.locator('.cart_description');
        this.priceText = page.locator('.cart_price');
        this.quantityText = page.locator('.cart_quantity');
        this.totalAmountText = page.locator('.cart_total');
        this.paymentLabel = page.getByText("Payment");
        this.orderPlacedLabel = page.getByText("Order Placed!")
        this.addressMenu = page.getByText("Your delivery address");
        this.billingAddressMenu = page.getByText("Your billing address");

        ////p[contains(text(),'Blue Top')]
    }



}