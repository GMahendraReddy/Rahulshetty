import {test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { CartPage } from "../pages/CartPage"
import { Paymentpage } from "../pages/Paymentpage"
import { OrderPlaced } from "../pages/OrderPlaced"
import { Xlsxutils } from "../utils/xlsxutils"
import path from "path"

let filepath = path.join(__dirname, "../Test Data/excel.xlsx")
let sheetname = "Login"
let data1: any
try{
data1 = Xlsxutils.getdatafromexcel(filepath, sheetname)
}catch(error){
    console.log(error)
}

let data = data1[0]

let loginpage: LoginPage
let dashboardpage : DashboardPage
let cartpage : CartPage
let paymentpage : Paymentpage
let orderplaced : OrderPlaced

test.beforeEach("Order Placed", async({page})=>{

    loginpage = new LoginPage(page)
    dashboardpage = new DashboardPage(page)
    cartpage = new CartPage(page)
    paymentpage = new Paymentpage(page)
    orderplaced = new OrderPlaced(page)
})

test("Get Order ID", async ()=>{
    await loginpage.OpenURL(data.url)
    await loginpage.ValidLogin(data.username, data.password)
    await dashboardpage.ProductAddtoCartFunctionality(data.product)
    await cartpage.ClickonCheckout()
    await paymentpage.SelectCountry("ind", " India")
    await orderplaced.GetOrderId()
    let OrderId = orderplaced.GetOrderId()
   // console.log(OrderId)
    expect(await orderplaced.ThankyouAssertion.textContent()).toContain("Thank")
    
})