import { Locator, Page } from "playwright";

export class OrderPlaced{

    private orderidlocator: Locator;
    page :Page
    ThankyouAssertion: Locator;

    OrderId : any 
    Order : any

    constructor(page:Page){
        this.page = page 
        this.orderidlocator = page.locator("label.ng-star-inserted")
        this.ThankyouAssertion = page.locator("h1.hero-primary")
    }
    async GetOrderId(){

         this.Order = await this.orderidlocator.textContent()

         this.OrderId = this.Order.replaceAll("|", "").trim()
         console.log(this.OrderId)
         return await this.OrderId
    }

}

