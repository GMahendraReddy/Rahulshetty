import {test, expect} from "@playwright/test"

test("alerts", async ({page})=>{

await page.goto("https://demoqa.com/alerts")

page.on("dialog", dailog=>{

    dailog.accept()

})
await page.locator("#confirmButton").click()
await expect(page.locator("confirmResult")).toHaveText("Ok")
})