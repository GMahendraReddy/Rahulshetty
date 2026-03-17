
import { Locator, Page } from "playwright"
export class Paymentpage{
    page : Page
    private SelectCountrytextbox : Locator
    private PlaceOrder : Locator
    private Autosuggestion : Locator
    GetCountryName : any

    constructor(page:Page){
        this.page = page
        this.SelectCountrytextbox = page.getByPlaceholder("Select Country")
        this.PlaceOrder = page.locator("a.action__submit")
        this.Autosuggestion = page.locator("section.ng-star-inserted button")
        this.GetCountryName =""
    }

    async SelectCountry(country:string, countryname:string){

        await this.SelectCountrytextbox.pressSequentially(country)
        await this.Autosuggestion.first().waitFor()
        let count = await this.Autosuggestion.count()
        console.log(count)

        for(let i =0; i<count; i++){

            this.GetCountryName = await this.Autosuggestion.locator("span").nth(i).textContent()
            console.log(this.GetCountryName)
            if(this.GetCountryName.toLocaleLowerCase() === countryname.toLocaleLowerCase()){
                await this.Autosuggestion.nth(i).locator("span").click()
                break
            }
        }

        await this.PlaceOrder.click()

    }
}

