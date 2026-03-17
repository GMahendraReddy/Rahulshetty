import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { CartPage } from "../pages/CartPage"
import { Paymentpage } from "../pages/Paymentpage"
import data from "../Test Data/login.json"

let loginpage: LoginPage
let dasbboardpage : DashboardPage
let cartpage : CartPage
let paymentpage : Paymentpage
let countryname =  " India"
let country = "ind"

test.beforeEach("Payment page", async({page})=>{

    loginpage = new LoginPage(page)
    dasbboardpage = new DashboardPage(page)
    cartpage = new CartPage(page)
    paymentpage = new Paymentpage(page)
})

test("Payment page select country", async ()=>{

    await loginpage.OpenURL(data.URL)
    await loginpage.ValidLogin(data.username, data.password)
    await dasbboardpage.ProductAddtoCartFunctionality(data.Product)
    await cartpage.ClickonCheckout()
    await paymentpage.SelectCountry(country, countryname)
})