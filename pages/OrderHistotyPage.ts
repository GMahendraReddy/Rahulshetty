import {Locator, Page} from "playwright"

export class OrderHistoryPage{
    
    page : Page
    OrderHistorylink : Locator
    TableOrderid : Locator
    getorderid : any

    constructor(page:Page){

        this.page = page
        this.OrderHistorylink = page.getByText(" Orders History Page ")
        this.TableOrderid = page.locator("tr.ng-star-inserted")
    }
    async ClkonOrderViewBtn(OrderId: string){

        await this.OrderHistorylink.click()
        await this.TableOrderid.first().waitFor()
        let Count = await this.TableOrderid.count()
        for(let i =0; i<Count; i++){
        this.getorderid = await this.TableOrderid.locator("th").nth(i).textContent()

        if(this.getorderid === OrderId){
            await this.TableOrderid.locator("button.btn").nth(i).click()
            break
        }
    }
    }
}