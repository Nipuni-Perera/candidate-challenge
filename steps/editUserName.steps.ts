import { Before, After, Given, When, Then } from "@cucumber/cucumber";
import { startBrowser, closeBrowser } from "../support/browser";
import { SignInPage } from "../pages/signInPage";
import { DashboardPage } from "../pages/dashboardPage";
import { UserPage } from "../pages/userPage";
import { UserDetailsPage } from "../pages/userDetailsPage";

Before(async function () {
    this.page = await startBrowser();
});

Given("I am logged in as an admin user", async function () {
    const signInPage = new SignInPage(this.page);
    const emailValue =
        process.env.REGISTERED_EMAIL || "adminuseremail@hello.com";
    const passwordValue =
        process.env.REGISTERED_PASSWORD || "adminuserpassword";

    await signInPage.loginAsAdmin(emailValue, passwordValue);
});

When("I navigate to Users page", async function () {
    const dashboardPage = new DashboardPage(this.page);

    await dashboardPage.clickOncustomersMenuButton();
    await dashboardPage.clickOncustomersSubMenuLink();
    await dashboardPage.verifyRedirectToUsersPage("users");
});

Then(
    "I should see first user email as {string}",
    async function (email: string) {
        const userPage = new UserPage(this.page);

        await userPage.verifyUserEmailIsVisibleInTable(email);
        this.storeUserEmail = email;
    },
);

Then("I open the user details page", async function () {
    const userPage = new UserPage(this.page);
    const nameToClick = this.storeUserEmail;

    await userPage.clickViewUserButton(nameToClick);
    await userPage.verifyRedirectToUserDetailsPage("user-v2");
});

Then("Select details tab", async function () {
    const userPage = new UserPage(this.page);
    const nameToClick = this.storeSearchedUsername;

    await userPage.clickViewUserButton(nameToClick);
    await userPage.verifyRedirectToUserDetailsPage("user-v2");
});

When(
    "I update the first name to {string} and save the changes",
    async function (newFirstName: string) {
        const userDetailsPage = new UserDetailsPage(this.page);

        await userDetailsPage.updateFirstName(newFirstName);
        await userDetailsPage.clickSaveButton();
    },
);

Then(
    "the user full name should display as {string}",
    async function (updatedUserFullName: string) {
        const userDetailsPage = new UserDetailsPage(this.page);

        await userDetailsPage.verifyUpdatedNameIsDisplayed(updatedUserFullName);
    },
);

After(async function () {
    await closeBrowser();
});