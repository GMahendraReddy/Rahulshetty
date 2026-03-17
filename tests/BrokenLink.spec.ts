import {test, expect } from "@playwright/test"

test("Broken link", async({page, request})=>{
    const Url = "https://rahulshettyacademy.com/brokenlink"
    await page.goto(Url)
   const elements =  await page.locator('a').all()

   for(const element of elements){
    const link:any = await element.getAttribute("href")
    
    if(!link) {
        continue
    }
    if(link.startsWith("http") || link.startsWith("https")){
    const apireq =  await request.get(link)
    //console.log(link)
   // console.log(link + "-" + apireq.status())
    if(apireq.status() > 400){
        console.log(link + "-" +  "broken link")
    }else{
        console.log(link + "-" +  "not a broken link")
    }
   }
}
})