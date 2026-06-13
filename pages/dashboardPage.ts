import { expect, Page, Locator } from "@playwright/test";

export class DashboardPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get customersMenuButton(): Locator {
        return this.page.locator(
            "a.header-contacts",
            { hasText: "Customers" },
        );
    }

    private get customersSubMenuLink(): Locator {
        return this.page.locator(
            "a[href='#/users']",
            { hasText: "Customers" },
        );
    }

    async clickOncustomersMenuButton(): Promise<void> {
        const customersMenuButton = this.customersMenuButton;

        await customersMenuButton.waitFor({ state: "visible" });
        await customersMenuButton.click();
    }

    async clickOncustomersSubMenuLink(): Promise<void> {
        const customersSubMenuLink = this.customersSubMenuLink;

        await customersSubMenuLink.waitFor({ state: "visible" });
        await customersSubMenuLink.click();
    }

    async verifyRedirectToUsersPage(expectedUrl: string): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(`.*${expectedUrl}`));
    }
}
