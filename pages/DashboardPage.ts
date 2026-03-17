import { Locator, Page } from "playwright"


export class DashboardPage{

    private page
    private ProductName : Locator //div.card-body
    private HomeProductPrice : Locator 
    private HomeViewBtn: Locator 
    //AddtoCartBtn: Locator
    private viewpageProductName: Locator
    private viewpageProductPrice: Locator
    cartBtn: Locator
    CartProductName: Locator
    //private CartProductPrice: Locator
    HomePageIdentifier: Locator
    HomeProductName : string
    CartProductNamefinal : any

    constructor(page: Page){
        this.page = page
        this.ProductName = page.locator("div.card-body")
        this.HomeProductPrice = page.locator("div.card-body")
        this.HomeViewBtn = page.getByRole("button", {name:"View"})
        //this.AddtoCartBtn = page.getByRole("button", {name:" Add To Cart"})
        this.viewpageProductName = page.locator("div.col-lg-6 h2")
        this.viewpageProductPrice = page.locator("div.col-lg-6 h3")
        this.cartBtn = page.locator("button.btn-custom").nth(2)
        this.CartProductName = page.locator("div.cartSection h3")
       // this.CartProductPrice = page.locator("")
       this.HomePageIdentifier = page.getByRole("button", {name:'HOME'})
       this.HomeProductName = ""
       this.CartProductNamefinal = ""
    }

    async ProductAddtoCartFunctionality(ProductName:string){

       await this.ProductName.first().waitFor()
       let ProductCount = await this.ProductName.count()

       for(let i =0; i<ProductCount; i++){
       this.HomeProductName = await this.ProductName.nth(i).locator("b").innerText()
       console.log(this.HomeProductName)
       if(ProductName.toLowerCase() === this.HomeProductName.toLowerCase()){
        this.HomeProductName = this.HomeProductName
        await this.ProductName.locator("i.fa-shopping-cart").nth(i).click()
        break
       }
       }

       await this.cartBtn.click()
       this.CartProductNamefinal = await this.CartProductName.textContent()

    }


}