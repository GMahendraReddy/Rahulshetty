import {test, expect} from "@playwright/test"

test("Alerts", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html")


    page.on("dialog", dailog=>{
       console.log(dailog.defaultValue())
        dailog.accept()
    })

    await page.getByText("Alert with Textbox ", {exact: true}).click()
    await page.locator(".btn-info").click()

})

test("Windows Handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    await page.getByText("SwitchTo", {exact: true}).hover()
    await page.getByText("Windows", {exact: true}).click()
    const newpage = page.waitForEvent("popup")
    await page.locator("#Tabbed .btn-info").click()
    const newpage1 = await newpage
   await newpage1.getByText("Downloads", {exact: true}).click()
   await page.getByText("Home", {exact: true}).click()
   await page.locator("#email").fill("bwejqwf")
})