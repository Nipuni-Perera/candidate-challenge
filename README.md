# Candidate Challenge

## Project Overview

I have successfully automated test, "Edit First Name in User Details" for the system at `https://demo-dashboard.helloagain.com/` using TypeScript with the Playwright testing framework. The tests are structured following the **Page Object Model (POM)** architecture.

## Project Structure

- **features/**: Contains Cucumber feature files.
    - `editUserName.feature`: Feature file for edit user's "First Name".
- **pages/**: Contains page object models.
    - `signInPage.ts`: Page object model for the sign in page.
    - `dashboardPage.ts`: Page object model for the dashboard page.
    - `userPage.ts`: Page object model for the Customers(/users) page.
    - `userDetailsPage.ts`: Page object model for the Customer Details(/user-v2/xxxx) page.
- **steps/**: Contains step definitions for Cucumber.
    - `editUserName.steps.ts`: Step definitions for edit user's first name.

## Installation

### Prerequisites

- Node.js version v24 (LTS) is required to run this application.
- Ensure you have Node.js installed. You can get more information from [Node.js Releases](https://nodejs.org/en/about/previous-releases).

#### Install Node.js Version 24 using nvm

The link provided (https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) contains instructions to install and update nvm, a tool that helps manage multiple versions of Node.js on a single machine. You can install nvm by following the steps in the README, which include running a shell script or using a package manager.

Install Node.js Version 24

```bash
nvm install 24
```

Use Node.js Version 24

```bash
nvm use 24
```

#### Install Required Browsers for Playwright

This command downloads and installs the browsers (e.g., Chromium, Firefox, WebKit) required by the Playwright testing framework.

```
npx playwright install
```

#### Setup

1. Clone the repository:

```bash
git clone https://github.com/Nipuni-Perera/candidate-challenge.git
```

2. Navigate to the project directory:

```bash
cd candidate-challenge
```

3. Install dependencies:

```bash
npm install
```

## Running Tests

To run the tests, use the following command:

```bash
npm run test
```

## Environment Variables

The following environment variables are used in the project:

- BASE_URL
- REGISTERED_EMAIL
- REGISTERED_PASSWORD

These variables can be set in the `.env` file. Please refer `.env.template` file.
