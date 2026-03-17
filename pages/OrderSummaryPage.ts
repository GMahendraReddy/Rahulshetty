import { Locator, Page } from "@playwright/test";

export class OrderSummaryPage{

    page: Page
    OrderId : Locator
    OrderID : any

    constructor(page: Page){
        this.page = page
        this.OrderId = page.locator("div.col-text")
    }

    async OrderDetailsVerification(){
        this.OrderID = await this.OrderId.textContent()
        return this.OrderID
    }

}