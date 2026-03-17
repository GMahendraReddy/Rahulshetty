import {test, expect} from "@playwright/test"

test("window", async({page})=>{

    page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent("popup")
    await page.getByRole("button",{name : 'click'}).click()
    const newpage = await page1
    await newpage.getByRole('link', {name: 'downloads'}).click()
    await page.bringToFront()
    await page.waitForTimeout(1000)
    await page.getByRole('link', {name: 'home'}).click()
    await page.getByPlaceholder("Email id for Sign Up").fill("Hiii")
    
    


})