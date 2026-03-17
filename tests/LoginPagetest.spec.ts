

import {test, expect} from "@playwright/test"

import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"

let loginpage
let dasbboardpage
const URL= "https://rahulshettyacademy.com/client/#/auth/login"
const username = "Mahendra@gmail.com"
const password = "Mahendra@12"
const InCrtPwd = ""
const errormessage = "Incorrect email or password."
test("Valid Login",async ({page})=>{

    loginpage = new LoginPage(page)
    await loginpage.OpenURL(URL)
    await loginpage.ValidLogin(username,password)
    dasbboardpage = new DashboardPage(page)
    await expect(dasbboardpage.HomePageIdentifier).toBeVisible()

})

test("InValid Login", async({page})=>{

    loginpage = new LoginPage(page)
    await loginpage.OpenURL(URL)
    await loginpage.InValidLogin(username, InCrtPwd)
    await expect(loginpage.errormessage).toHaveText(errormessage)
})