describe("bugTracker", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000/bugs");
    page.mainFrame().waitForTimeout(3000);
  });

  it('Should toggle the bug when clicked', async () => {

    //wait for the page to load with bugnames
    await page.waitForSelector("span.bugname");

    //get all the span with the class 'bugname
    const bugNameSpans = await page.$$('span.bugname');

    //find out the first span with text "Server communication failure"
    const bugNameSpan = bugNameSpans.find(
      async element =>
        await element.evaluate(node => node.innerText === "Search communication failure")
    );

    //get if the span has the class "closed"
    const toggledFlag = await bugNameSpan.evaluate(node => node.classList.contains('closed'));

    //click the span
    await bugNameSpan.click();

    //get if the span has the class "closed"
    const updatedToggledFlag = await bugNameSpan.evaluate(node =>
      node.classList.contains("closed")
    );

    //ensure the "closed" class is toggled
    expect(toggledFlag).toBe(!updatedToggledFlag);

  })
});