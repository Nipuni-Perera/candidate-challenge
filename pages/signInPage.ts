import { expect, Page, Locator } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export class SignInPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get emailInput(): Locator {
        return this.page.getByLabel("Email address");
    }

    private get passwordInput(): Locator {
        return this.page.getByLabel("Password");
    }

    private get signInButton(): Locator {
        return this.page.getByRole("button", { name: "Sign in" });
    }

    async navigateToLoginPage(): Promise<void> {
        await this.page.goto(
            `${process.env.BASE_URL}/#/login` ||
                "https://demo-dashboard.helloagain.com/#/login",
        );
    }

    async isEmailFieldVisible(): Promise<void> {
        const emailLocator = this.emailInput;

        await expect(emailLocator).toBeVisible();
    }

    async isPasswordFieldVisible(): Promise<void> {
        const passwordLocator = this.passwordInput;

        await expect(passwordLocator).toBeVisible();
    }

    async clickOnEmailInput(email: string): Promise<void> {
        const emailInput = this.emailInput;

        await emailInput.waitFor({ state: "visible" });
        await emailInput.fill(email);
    }

    async clickOnPasswordInput(password: string): Promise<void> {
        const passwordInput = this.passwordInput;

        await passwordInput.waitFor({ state: "visible" });
        await passwordInput.fill(password);
    }

    async displaySignInButton(): Promise<void> {
        const signInButton = this.signInButton;

        await signInButton.waitFor({ state: "visible" });
        await expect(signInButton).toBeVisible();
    }

    async clickOnSignInButton(): Promise<void> {
        const signInButton = this.signInButton;

        await signInButton.waitFor({ state: "visible" });
        await signInButton.click({ force: true });
    }

    async verifyRedirectToDashboardPage(expectedUrl: string): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(`.*${expectedUrl}`));
    }

    async loginAsAdmin(email: string, password: string): Promise<void> {
        await this.navigateToLoginPage();
        await this.clickOnEmailInput(email);
        await this.clickOnPasswordInput(password);
        await this.clickOnSignInButton();
        await this.verifyRedirectToDashboardPage("dashboard");
    }
}
