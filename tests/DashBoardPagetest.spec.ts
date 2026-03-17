import {test, expect} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import data from '../Test Data/login.json'

let loginpage 
let dasbboardpage: DashboardPage
const ProductName = "iphone 13 pro"
test.beforeEach("Login pre condtion", async({page})=>{

loginpage = new LoginPage(page)
await loginpage.OpenURL(data.URL)
loginpage.ValidLogin(data.username, data.password)
dasbboardpage = new DashboardPage(page)
await expect(dasbboardpage.HomePageIdentifier).toBeVisible()

})

test("Add to Cart Validation", async()=>{

    await dasbboardpage.ProductAddtoCartFunctionality(ProductName)
    expect(dasbboardpage.CartProductNamefinal.toLocaleLowerCase()).toBe(dasbboardpage.HomeProductName.toLocaleLowerCase())
    
})