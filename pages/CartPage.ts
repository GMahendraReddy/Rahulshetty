
import {Locator, Page} from "Playwright"

export class CartPage{

    page :Page
    private checkout : Locator
    PaymentPageIdentification : Locator

    constructor(page:Page){
        this.page = page
        this.checkout = page.getByText("Checkout", {exact:true})
        this.PaymentPageIdentification = page.locator("div.payment__title").first()
    }

    async ClickonCheckout(){
        await this.checkout.click()
    }
} // new  line
