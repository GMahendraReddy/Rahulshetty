import {test, expect} from "@playwright/test"

test("Single iFrame", async ({page})=>{


    await page.goto("https://demo.automationtesting.in/Frames.html")
    const framepage = page.frameLocator("//iframe[@id ='singleframe']")
    const lo = page.locator("div.col-xs-offset-5 input");
    await framepage.lo.first().fill("Mahendra")
    await expect(framepage.locator("div.col-xs-offset-5 input").first()).toHaveValue("Mahendra")
    await page.getByText("Iframe with in an Iframe").click()

    const framepage1 = page.frameLocator("div#Multiple iframe")

    const nestedframe = framepage1.frameLocator("div.iframe-container iframe")
    await nestedframe.locator("div.col-xs-offset-5 input").fill("Hiiii")
})