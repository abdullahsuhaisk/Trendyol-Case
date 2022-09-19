import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("Opens modal and check header and close button", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".App");
    await page.waitForSelector(".feedbacky-open-icon-button");
    await page.click(".feedbacky-open-icon-button");
    await page.waitForSelector(".feedbacky-modal");

    const text = await page.$eval(".feedbacky-modal-header >h1", (e) => e.textContent);
    expect(text).toContain("SEND YOUR FEEDBACK");

    await page.click(".feedbacky-modal-cancelButton");
    await page.waitForSelector(".feedbacky-open-icon-button");
  });

  afterAll(() => browser.close());
});