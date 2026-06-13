import { chromium, Browser, BrowserContext, Page } from "playwright";

let browser: Browser;
let context: BrowserContext;
let page: Page;

export const startBrowser = async () => {
    if (!browser) {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
    }
    return page;
};

export const closeBrowser = async () => {
    if (browser) {
        await browser.close();
        browser = undefined as any;
        context = undefined as any;
        page = undefined as any;
    }
};
