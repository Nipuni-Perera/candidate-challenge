import { expect, Page, Locator } from "@playwright/test";

export class UserPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private userByEmail(email: string): Locator {
        return this.page.locator(`tbody tr:has-text("${email}")`);
    }

    private viewUserButtonByEmail(email: string): Locator {
        return this.userByEmail(email).locator(
            "a.btn-primary"
        );
    }

    async verifyUserEmailIsVisibleInTable(email: string): Promise<void> {
        await expect(this.userByEmail(email)).toBeVisible();
    }

    async clickViewUserButton(email: string): Promise<void> {
        const viewUserButtonByName = this.viewUserButtonByEmail(email);

        await viewUserButtonByName.waitFor({ state: "visible" });
        await viewUserButtonByName.click();
    }

    async verifyRedirectToUserDetailsPage(expectedUrl: string): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(`.*${expectedUrl}`));
    }
}
