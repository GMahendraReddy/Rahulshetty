import {test, request} from "@playwright/test"

let url = "https://slicuatc.shriramlife.in/statimliidp/Account/Login?ReturnUrl=%2Fstatimliidp%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dastra_web_client%26redirect_uri%3Dhttps%253A%252F%252Fslicuatc.shriramlife.in%252FSTATIMLIASTRA%252Fcallback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520api1%26state%3D81b35ab76efd4e27b00d537bdb1ae007%26code_challenge%3DKUIl8vHDXEN5bZ1S1gftHx96k0qDqhzzicr7i73zY9w%26code_challenge_method%3DS256%26response_mode%3Dquery"

test("API test", async ({request})=>{

    const apicall = await request.get(url)

   let bodys =  apicall.status()
   console.log(bodys)


})