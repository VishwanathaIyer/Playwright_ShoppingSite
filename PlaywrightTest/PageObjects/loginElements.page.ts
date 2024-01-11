import { expect, Locator, Page } from '@playwright/test';

export class loginElements {
    readonly page: Page;
    readonly loginEmailid: Locator;
    readonly loginPassword: Locator;
    readonly signinButton :Locator;

    readonly signupButton: Locator;
    readonly initialHeading: Locator;
    readonly radioButton: Locator;
    readonly signupEmailid: Locator;
    readonly signupConfirmButton: Locator;
    readonly nameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly dayDropDown: Locator;
    readonly monthsDropDown: Locator;
    readonly yearsDropDown: Locator;
    readonly checkBox: Locator;
    readonly firstNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly companyTextBox: Locator;
    readonly addressTextBox: Locator;
    readonly countryDropDown: Locator;
    readonly stateTextBox: Locator;
    readonly cityTextBox: Locator;
    readonly zipcodetextBox: Locator;
    readonly mobileTextBox: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreationMessage: Locator;
    readonly continueButton: Locator;
    readonly duplicateContinue: Locator;

    readonly gotoSite: Function;

    constructor(page: Page) {
        this.page = page;

        //elements in login page
        this.loginEmailid = page.getByPlaceholder('Email Address').nth(0);
        this.loginPassword = page.getByPlaceholder('Password');
        this.signinButton = page.getByRole('button', {name : "Login"});

        //elements in signup page
        this.signupButton = page.getByRole('link', { name: ' Signup / Login' });
        this.initialHeading = page.getByText("New User Signup!");
        var heading = page.getByRole('heading', { name: "Enter Account Information" });

        this.signupEmailid = page.getByPlaceholder('Email Address').nth(1);
        this.signupConfirmButton = page.getByRole('button', { name: "Signup" });
        this.radioButton = page.getByRole('radio', { name: "Mr." });
        this.nameTextBox = page.getByPlaceholder('Name');
        this.passwordTextBox = page.locator("#password");
        this.dayDropDown = page.locator(`select[name='days']`); //date dropdown
        this.monthsDropDown = page.locator(`select[name='months']`); //month dropdown
        this.yearsDropDown = page.locator('select[name="years"]'); //year dropdown
        this.checkBox = page.getByRole('checkbox', { name: "Receive special offers from our partners!" });
        this.firstNameTextBox = page.locator("#first_name");
        this.lastNameTextBox = page.locator("#last_name");
        this.companyTextBox = page.locator("#company");
        this.addressTextBox = page.locator("#address1");
        this.countryDropDown = page.locator('select[name="country"]');
        this.stateTextBox = page.locator("#state");
        this.cityTextBox = page.locator("#city");
        this.zipcodetextBox = page.locator("#zipcode");
        this.mobileTextBox = page.locator("#mobile_number");
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });


        //sucessful signup
        this.accountCreationMessage = page.getByRole('heading', { name: "ACCOUNT CREATED!" });
        this.continueButton = page.getByRole('button', { name: "Continue" });
        // this.duplicateContinue = page.getByText("Continue");
        this.duplicateContinue = page.locator("//input[@aria-label='View As Card']");

        //opn the test web page
        this.gotoSite = async function () {
            await page.goto("https://www.automationexercise.com/");
        }
    }


}