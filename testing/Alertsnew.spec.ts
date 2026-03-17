import {test, expect, chromium} from "@playwright/test"
import { Browser } from "@playwright/test"
import { log } from "console"
import { buffer } from "stream/consumers"

let browser: Browser

test("Alerts handelling", async({page})=>{
    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const page = await context.newPage()

    await page.goto("https://demo.automationtesting.in/Alerts.html")

    page.on("dialog", ccc=>{
       const c=  ccc.type
       console.log(c)
       ccc.accept()
    })
    await page.getByRole("button", {name : "    click the button to display an  alert box: "}).click()
})