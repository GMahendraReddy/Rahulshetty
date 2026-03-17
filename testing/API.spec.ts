

import {test, expect, request} from "@playwright/test"

const PostUrl ="https://rahulshettyacademy.com/api/ecom/auth/login"
const PostPayload = {userEmail: "Mahendra@gmail.com", userPassword: "Mahendra@12"}

const orderurl = "https://rahulshettyacademy.com/api/ecom/order/create-order    "
const orderpayload = {orders: [{country: "Argentina", productOrderedId: "68a961959320a140fe1ca57e"}]}
let token: any

let Email = "Mahendra@gmail.com"
let ProductName = "IPHONE 13 PRO"
let CountryName = "India"
let ProductPrice

let OrderId: string

test.beforeAll("Token generation", async()=>{

    const apicontext = await request.newContext()

    const apidata = await apicontext.post(PostUrl,
        {
        data : PostPayload,
        }
    )

    const apidatajson = await apidata.json()
    console.log(apidatajson)
    token = apidatajson.token
    console.log(token)

   const orderpost = await apicontext.post(orderurl,
    {
        data:orderpayload,
        headers:{
            "authorization": token
        }
    }
   )


   const OrderJson = await orderpost.json()

   OrderId = OrderJson.orders[0]


})

test("E2E Test Case1", async ({page})=>{

    await page.addInitScript((value)=>{

        window.localStorage.setItem("token", value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
   
    console.log(OrderId)
    await page.getByRole("button",{name:'ORDERS'}).click()

    const orderlist = page.locator("table tbody tr")

    await orderlist.first().waitFor()

    const ordercount = await orderlist.count()

    for(let i=0; i < ordercount;i++){

        const TableOrderId = await orderlist.nth(i).locator("th").innerText()

         console.log(TableOrderId)
        if(OrderId === TableOrderId){
console.log("before")
          // await expect(orderlist.nth(i).getByText("IPHONE 13 PRO")).toHaveText(ProductName)
           await orderlist.nth(i).locator("td button.btn-primary").nth(i).click()
           console.log("after")
           break
        }
    }

    await expect(page.locator("div.email-title")).toContainText("order")


    
})

