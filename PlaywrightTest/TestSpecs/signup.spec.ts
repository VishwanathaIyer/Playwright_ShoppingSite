import { test, expect, Page, chromium } from '@playwright/test';
import {loginElements} from '../PageObjects/loginElements.page';

test.describe('Sign up test case', async()=>{
    test.describe.configure({mode: 'serial'});

    let context;
    let page;
    let signupElem;

    test.beforeAll(async()=>{
        const browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext({});
        page = await context.newPage();
        signupElem = new loginElements(page);
    })

    test('Visit the test site and assert the sign up screen', async()=>{
        await test.step('go to the test site and verify if screen is open', async()=>{
            await signupElem.gotoSite();
            await signupElem.signupButton.click();
            await expect(await signupElem.initialHeading).toBeVisible();
        })
    })

    test('Enter the details and verify if account is created', async()=>{
        await signupElem.nameTextBox.type("Vishwanathan");
        await signupElem.signupEmailid.type("adedAQSrfsyy@g.com");
        await signupElem.signupConfirmButton.click();
        await signupElem.radioButton.click();
        await signupElem.passwordTextBox.fill("abcd");
        await signupElem.dayDropDown.selectOption("21");
        await signupElem.monthsDropDown.selectOption("December");
        await signupElem.yearsDropDown.selectOption("1995");
        await signupElem.checkBox.click();

        await signupElem.firstNameTextBox.type("vishwa");
        await signupElem.lastNameTextBox.type("nathan");
        await signupElem.companyTextBox.type("JPM");
        await signupElem.addressTextBox.type("Bengaluru");
        await signupElem.countryDropDown.selectOption("India");
        await signupElem.cityTextBox.type("Bengaluru");
        await signupElem.stateTextBox.type("Karnataka");
        await signupElem.zipcodetextBox.type("5600");
        await signupElem.mobileTextBox.type("457");
        await signupElem.createAccountButton.click();

        //assert
        await expect(await signupElem.accountCreationMessage).toBeVisible();
    })
})