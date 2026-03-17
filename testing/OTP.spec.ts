import {test} from "playwright/test"

test("OTP", async ({page})=>{
    
    await page.goto("https://www.amazon.in/ax/claim?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26tag%3Dgooghydrabk1-21%26ref%3Dnav_signin%26adgrpid%3D155259813593%26hvpone%3D%26hvptwo%3D%26hvadid%3D674893540034%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D3719481816625633820%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9062135%26hvtargid%3Dkwd-64107830%26hydadcr%3D14452_2316413%26gad_source%3D1&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&arb=91f139ae-cdd9-4940-896e-569fe9a714f4&openid.assoc_handle=inflex&openid.mode=checkid_setup&policy_handle=Retail-Checkout")
    await page.locator("input#ap_email_login").fill("7981418525")
    await page.locator(".a-button-input").click()
    await page.locator("#auth-login-via-otp-btn").click()
    await page.waitForTimeout(20000)
    await page.locator("input.a-button-input").first().click()
})

