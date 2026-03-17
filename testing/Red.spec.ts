import {test, expect} from "@playwright/test"
import { lstat } from "fs"

let CityFromName = "Piduguralla"
let CityToName = "Kukatpally, Hyderabad"
let TargetMonth = "October"
let TargetYear = "2025"
let TargetMonthYear = "October 2025"
let filteroption1 = "AC"
let filteroption2 = "SEATER"
let filteroption3 = "volvo"

test("redbus.in", async ({page})=> {

    await page.goto("https://www.redbus.in/")

    //Selction of From City
    const fromcity = page.locator("div.label___57eda7")
   // await fromcity.first().waitFor({state:"visible"})
    await fromcity.first().click()
    await page.waitForTimeout(2000)
    await page.locator("div.srcDest___aa6db3").first().pressSequentially("pid")

    await page.waitForTimeout(2000)
    const cityfromlist = page.locator("div.listItem___9a15c0")
    await cityfromlist.first().waitFor()

   // await page.waitForTimeout(2000)
    //cityfromlist.filter({hasText:`${CityFrom1}`}).click()

    const citycount = await cityfromlist.count()
    console.log(citycount)

    for(let i =0 ; i< citycount; i++){

        let cityname = await cityfromlist.nth(i).textContent()
        console.log(cityname)
        if(cityname === CityFromName){
            await cityfromlist.nth(i).click()
            break
        }
    }

   //selection of To City
   const ToCity = page.locator("div.label___57eda7")
   await ToCity.last().click()
   await page.waitForTimeout(2000)

   await page.locator("div.srcDest___aa6db3").last().pressSequentially("kuk")
   await page.waitForTimeout(2000)
   const CityToSuggestions = page.locator("div.listItem___9a15c0")

   await CityToSuggestions.first().waitFor()
   await page.waitForTimeout(2000)

   await CityToSuggestions.filter({hasText: `${CityToName}`}).click()
   await page.getByRole('button', {name:'Search buses'}).click()

   //Calender 

   await page.locator("//div[@class ='dateInputWrapper___c8345a']").click()

   await page.waitForTimeout(2000)

   const CurrentMonthYear = await page.locator(".monthYear___2b924f").innerText()

   console.log("CurrentMonthYear")

   while(!(CurrentMonthYear === TargetMonthYear)){

    await page.locator("i.arrow___2dd861").last().click()

   }
   await expect(page.locator("div.header___5a196d")).toBeVisible()

   const filteroptions =  page.locator("div.container___c84b79  ")

   /*await filteroptions.first().waitFor()

   const filtercount = await filteroptions.count()

   await page.waitForTimeout(2000)
   for(let i =0; i< filtercount; i++){

    const filtertext = await filteroptions.nth(i).innerText()
    console.log(filtertext)

    if (filteroption1.includes(filtertext)){

        filteroptions.nth(i).click()
        break
    }

     if (filteroption2.includes(filtertext)){

        filteroptions.nth(i).click()
        break
    }
         if (filteroption3.includes(filtertext)){

        filteroptions.nth(i).click()
        break
    }
   }*/




})