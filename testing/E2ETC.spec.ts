import {test, expect} from "@playwright/test"


let Email = "Mahendra@gmail.com"
let ProductName = "IPHONE 13 PRO"
let CountryName = "India"
let ProductPrice

test("E2E Test Case", async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill(Email)
    await page.getByPlaceholder("enter your passsword").fill("Mahendra@12")
    await page.getByRole("button",{name : "login"}).click()
    await expect(page.getByText("HOME", {exact : true})).toBeVisible()

    const products = page.locator("div.card-body")
    await products.last().waitFor({state : "visible"})
    let productscount = await products.count()

    for(let i=0; i < productscount;i++){

        const Productstext = await products.nth(i).locator("h5").textContent()
        console.log(Productstext)
        if(Productstext === ProductName){

            await products.nth(i).locator("button.w-10").click()
            ProductPrice = await products.nth(i).locator("div.my-2").textContent()
            break
        }
    }

    console.log(ProductPrice)
    await page.locator(".fa-shopping-cart").first().click()
    await expect(page.locator("div.prodTotal")).toHaveText(ProductPrice)
    await page.getByText("Checkout").click()

    await expect(page.locator("div.user__name input.ng-pristine")).toHaveValue(Email)

    await page.getByPlaceholder("Select Country").pressSequentially("ind")
    const CountryList = page.locator("button.ta-item")
    await CountryList.first().waitFor()
    let CountryCount = await CountryList.count()

    
    for(let j = 0 ; j < CountryCount ;j++){

       // console.log("inside for loop")
        const countrytext = await CountryList.nth(j).textContent()

        //console.log(countrytext)
        if(countrytext?.trim() === CountryName){

            //await CountryList.nth(j).locator("span").hover()
            await CountryList.nth(j).click()
            break 

        }
    }

    await page.getByText('Place Order').click()
    await expect(page.locator("//h1[text() = ' Thankyou for the order. ']")).toContainText("Thankyou")
    const order = await page.locator("//label[@class= 'ng-star-inserted']").innerText()
    const OrderId = order.replaceAll("|" , "").trim()
    await page.getByRole("button",{name:'ORDERS'}).click()

    const orderlist = page.locator("table tbody tr")

    await orderlist.first().waitFor()

    const ordercount = await orderlist.count()

    for(let i=0; i < ordercount;i++){

        const TableOrderId = await orderlist.nth(i).locator("th").innerText()

         console.log(TableOrderId)
        if(OrderId.includes(TableOrderId)){

           await expect(orderlist.nth(i).getByText("IPHONE 13 PRO")).toHaveText(ProductName)
           await orderlist.nth(i).locator("th").nth(4).click()
        }
    }


    
})