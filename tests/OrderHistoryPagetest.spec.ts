import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { CartPage } from "../pages/CartPage"
import { Paymentpage } from "../pages/Paymentpage"
import { OrderHistoryPage } from "../pages/OrderHistotyPage"
import { OrderPlaced } from "../pages/OrderPlaced"
import path from "path"
import { Xlsxutils } from "../utils/xlsxutils"

let filepath = path.join(__dirname, "../Test Data/excel.xlsx")
let sheetname = "Login"
let data1 : any
try{
 data1 =  Xlsxutils.getdatafromexcel(filepath, sheetname)
} catch(error){
    console.log(error)
}
let country = "Ind"
let countryName = " India"

let data = data1[0]
let OrderId 
let loginpage : LoginPage
let dashboardpage : DashboardPage
let cartpage : CartPage
let paymentpage : Paymentpage
let orderplaced : OrderPlaced
let orderhistory : OrderHistoryPage

test.beforeEach("OrderHistoty Table Verification", async({page})=>{

    loginpage = new LoginPage(page)
    dashboardpage = new DashboardPage(page)
    cartpage = new CartPage(page)
    paymentpage = new Paymentpage(page)
    orderplaced = new OrderPlaced(page)
    orderhistory = new OrderHistoryPage(page)
})

test("OrderHistoty Table Verification test", async()=>{


    await loginpage.OpenURL(data.url)
    await loginpage.ValidLogin(data.username, data.password)
    await dashboardpage.ProductAddtoCartFunctionality(data.product)
    await cartpage.ClickonCheckout()
    await paymentpage.SelectCountry(country, countryName)
    OrderId = await orderplaced.GetOrderId()
    console.log(OrderId)
    await orderhistory.ClkonOrderViewBtn(OrderId)

})
