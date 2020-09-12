const path = require("path");

describe("app", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000/spinner");
  });

 

  it('should match a button with a "Up" text inside', async () => {
    await expect(page).toMatchElement("button", { text : "Up" });
  });

    it('should match a button with a "Down" text inside', async () => {
     await expect(page).toMatchElement("button", { text: "Down" });
   })

  it('should increment the value on clicking the "Up" button', async () => {
      await expect(page).toFill('input[id="txtDelta"]', "1");
      await page.click('button#btnUp');
      const spanCounterValue = await page.$eval("#spanResult", e => e.innerText);
      expect(spanCounterValue).toBe(` [ 1 ] `);
  })

  it('should increment the value on clicking the "DOWN" button', async () => {
    await expect(page).toFill('input[id="txtDelta"]', "1");
    await page.click("button#btnDown");
    const spanCounterValue = await page.$eval("#spanResult", e => e.innerText);
    expect(spanCounterValue).toBe(` [ -1 ] `);
  });

});
