describe("bugTracker", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000/bugs");
    page.mainFrame().waitForTimeout(3000);
  });

  it('Should toggle the bug when clicked', async () => {
    await page.click("span.bugname");

  })
});