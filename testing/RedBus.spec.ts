import {test, expect} from "@playwright/test"

let cityname = "Piduguralla, Andhra Pradesh, India"

test("Book bus in Red Bus", async ({page})=>{

  await page.goto("https://www.redbus.com/")

  const FromField = page.locator("#src")
  await FromField.waitFor({state:"visible"})
  await page.locator("#src").pressSequentially("piduguralla", {delay:500})
  const suggestions = page.locator("div.autosuggest-ul li")
  await suggestions.waitFor({state:"visible"})
  const CityFrom = page.locator("li.sc-csuQGl")
  await CityFrom.first().waitFor()
  CityFrom.filter({hasText:`${cityname}`}).click()



})