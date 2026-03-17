

import {Locator, Page} from  "playwright"

export class LoginPage{

    private page
    private username : Locator
    private password : Locator
    private LoginBTn
    errormessage

    constructor(page: Page){
     this.page = page
     this.username = page.locator("#userEmail")
     this.password = page.locator("#userPassword")
     this.LoginBTn = page.locator("#login")
     this.errormessage = page.locator("div.toast-message")

    }

    async OpenURL(URL: any){
        await this.page.goto(URL)
    }

    async ValidLogin(username: string, password: string){

        await this.username.fill(username)
        await this.password.fill(password)
        await this.LoginBTn.click()

    }

    async InValidLogin(usrname:string, InCrtPwd:string)
    {
        await this.username.fill(usrname)
        await this.password.fill(InCrtPwd)
        await this.LoginBTn.click()
    }

}