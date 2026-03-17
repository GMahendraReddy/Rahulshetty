import {test, expect} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import path from "path"
import { Xlsxutils } from '../utils/xlsxutils'

let loginpage : LoginPage
let dasbboardpage: DashboardPage
let url = "https://rahulshettyacademy.com/client/#/auth/login"

let filepath = path.join(__dirname, "../Test Data/excel.xlsx")
let sheetname = "Login"
let products : any
try{
    products = Xlsxutils.getdatafromexcel(filepath, sheetname)
}
catch(error){
    console.log(error)
}

test.beforeEach("Login pre condtion", async({page})=>{

loginpage = new LoginPage(page)
dasbboardpage = new DashboardPage(page)

})
for(let data of products){
test(`Add to Cart Validation using excel for ${data.product}`, async()=>{

await loginpage.OpenURL(url)
await loginpage.ValidLogin(data.username, data.password)
await expect(dasbboardpage.HomePageIdentifier).toBeVisible()

await dasbboardpage.ProductAddtoCartFunctionality(data.product)
expect(dasbboardpage.CartProductNamefinal.toLocaleLowerCase()).toBe(dasbboardpage.HomeProductName.toLocaleLowerCase())
    
})}