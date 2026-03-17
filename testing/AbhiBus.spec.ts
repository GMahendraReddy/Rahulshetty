import {test, expect} from "@playwright/test"

test("AbhiBus", async ({page})=>{

    await page.goto("https://www.abhibus.com/")

    await page.getByPlaceholder("Leaving From").pressSequentially("Pid")
    const suggestions = page.locator("ul.auto-complete-list")
    suggestions.waitFor()
    
    const fromCity = page.locator("li.auto-complete-list-item ")
    await fromCity.first()
})