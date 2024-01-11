import { chromium, test, Page, Locator } from "@playwright/test";

export class registerUserPageObject {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly myAccountButton: Locator;
    readonly registerDropDownButton: Locator;
    readonly loginDropDownButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly emailTextBox: Locator;
    readonly telephoneTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly passwordConfirmTextBox: Locator;
    readonly radioButton: Locator;
    readonly subscribeRadioButton: Locator;
    readonly privacyPolicyCheckBox: Locator;
    readonly continueButton: Locator;

    //loginUser
    readonly loginId : Locator;
    readonly loginPassword : Locator;
    readonly loginButton : Locator;

    //ErrorMessage
    readonly firstNameValidation: Locator;
    readonly lastNameValidation: Locator;
    readonly emailValidation: Locator;
    readonly telephoneValidation: Locator;
    readonly passwordValidation: Locator;

    constructor(page: Page) {
        this.page = page;

        this.pageTitle = page.getByTitle("Poco Electro");
        this.myAccountButton = page.getByText("My account").nth(1);
        this.registerDropDownButton = page.getByRole('link', { name: "Register" });
        this.loginDropDownButton = page.getByRole('link', { name: "Login" });
        this.firstNameTextBox = page.getByPlaceholder("First Name");
        this.lastNameTextBox = page.getByPlaceholder("Last Name");
        this.emailTextBox = page.getByPlaceholder("E-Mail");
        this.telephoneTextBox = page.getByPlaceholder("Telephone");
        this.passwordTextBox = page.getByPlaceholder("Password", {exact:true});
        this.passwordConfirmTextBox = page.getByPlaceholder("Password Confirm", {exact:true});
        this.radioButton = page.getByText("Yes");
        this.privacyPolicyCheckBox = page.getByText("I have read and agree to the ");
        this.continueButton = page.getByText("Continue");

        this.loginId = page.getByPlaceholder("E-Mail Address");
        this.loginPassword = page.getByPlaceholder("Password");
        this.loginButton = page.locator("//input[@value='Login']");

    }

}
