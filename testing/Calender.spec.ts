import {test, expect} from "@playwright/test"
import { Console, log } from "console"

test("Handelling Calender", async({page})=>{

const TargetMonth = "May"
const TargetYear = 2027
const TargetDay = 14
let CurrentMonthIndex
let TargetMonthIndex


await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
await page.locator("img.ui-datepicker-trigger").click()

const Allmonths =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function Monthnumber(month){
   return Allmonths.indexOf(month)
}
while(true){


    const CurrentMonth = await page.locator("span.ui-datepicker-month").textContent()
    const CurrentYear = Number(await page.locator("span.ui-datepicker-year").textContent())

    CurrentMonthIndex = Monthnumber(CurrentMonth)
    TargetMonthIndex = Monthnumber(TargetMonth)

    if(TargetYear === CurrentYear && TargetMonth === CurrentMonth){
        break
    }

    if ((TargetYear > CurrentYear) || (TargetYear == CurrentYear && TargetMonthIndex > CurrentMonthIndex)){

        
        await page.locator("span.ui-icon-circle-triangle-e").click()
        console.log(CurrentYear, CurrentMonth)
    }else{
        await page.locator("span.ui-icon-circle-triangle-w").click()
    }

}
await page.getByText(TargetDay.toString(), {exact:true}).click()
const FinalMonth = (TargetMonthIndex +1).toString().padStart(2, "0")
const Date = `${FinalMonth}/${TargetDay}/${TargetYear}`
console.log(Date)
await expect(page.locator("#sixth_date_picker")).toHaveValue(Date)
})


