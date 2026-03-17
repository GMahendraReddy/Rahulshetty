import {test, expect} from "@playwright/test"

test("Register in Rahul Website", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator(".text-reset").click()     
    await page.getByPlaceholder("First Name").fill("Mahendra")
    await page.getByPlaceholder("Last Name").fill("Reddy")
    await page.locator("#userEmail").fill("Mahendra@gmail.com")
    await page.locator("#userMobile").fill("5552666269")
    await page.locator(".custom-select").selectOption({label:'Doctor'})
    await page.locator("input.mt-3").first().check()
    await page.locator("#userPassword").fill("Mahendra@12")
    await page.locator("#confirmPassword").fill("Mahendra@12")
    await page.locator("div.col-md-1").click()
    await page.locator("#login").click()

})