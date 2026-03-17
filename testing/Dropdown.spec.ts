import {test, expect} from "@playwright/test"

test("Validating dynamic dropdown", async ({page}) =>{

    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#state .css-1hwfws3").click()
    await page.locator("#react-select-3-option-2").click()
    await page.locator(".css-1wa3eu0-placeholder").last().click()
    await page.locator("//div[.='Karnal']").click()

})

