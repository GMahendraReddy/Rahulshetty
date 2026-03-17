import {test, expect } from "@playwright/test"
import {LoginPage} from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { CartPage } from "../pages/CartPage"
import { Xlsxutils } from "../utils/xlsxutils"
import path from "path"

const filepath = path.join(__dirname, "../Test Data/excel.xlsx")
const sheetname = "Login"
let data1: any
try{
data1=  Xlsxutils.getdatafromexcel(filepath, sheetname)
}
catch(error){
    console.log(error)
}
let data = data1[0]
let loginpage : LoginPage
let dashboardpage : DashboardPage
let cartpage : CartPage


test.beforeEach("Cart Page Before Each", async ({page})=>{

    loginpage = new LoginPage(page)
    dashboardpage = new DashboardPage(page)
    cartpage = new CartPage(page)
})

test(`Cart Page Validation ${data.product}`, async()=>{

    console.log(data)
    await loginpage.OpenURL(data.url)
    await loginpage.ValidLogin(data.username, data.password)
    await dashboardpage.ProductAddtoCartFunctionality(data.product)
    await cartpage.ClickonCheckout()
    await expect(cartpage.PaymentPageIdentification).toBeVisible()

})