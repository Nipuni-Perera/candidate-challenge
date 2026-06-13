import { expect, Page, Locator } from "@playwright/test";

export class UserDetailsPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get firstNameButtonLocator(): Locator {
        return this.page.getByRole("button", { name: "Max", exact: true });
    }

    private get firstNameInputLocator(): Locator {
        return this.page.locator("form.field-container input[name='first_name']");
    }

    private get saveButton(): Locator {
        return this.page.getByRole("button", { name: "Save" });
    }

    private get customerNameHeading() {
        return this.page.locator("h1.customer-name");
    }

    async updateFirstName(name: string): Promise<void> {
        const firstNameButtonLocator = this.firstNameButtonLocator;
        await firstNameButtonLocator.click();
        const firstNameInputLocator = this.firstNameInputLocator;
        await firstNameInputLocator.focus();
        await firstNameInputLocator.click();
        await firstNameInputLocator.fill(name);
    }

    async clickSaveButton(): Promise<void> {
        await this.saveButton.click();
    }

    async verifyUpdatedNameIsDisplayed(expectedName: string): Promise<void> {
        await expect(this.customerNameHeading).toHaveText(expectedName);
    }
}
