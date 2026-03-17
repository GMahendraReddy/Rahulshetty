import {test, expect} from "@playwright/test"
import path from "path"
import fs from 'fs'

test("Download", async({page})=>{

await page.goto("https://demo.automationtesting.in/FileDownload.html")
const downloadresult = page.waitForEvent('download')
await page.locator(".btn-primary").click()
const download = await downloadresult

const DownloadDir = await path.join(__dirname, "../Downloads")
const filename = download.suggestedFilename()

const filepath = path.join(DownloadDir, filename)
await download.saveAs(filepath)
await expect(filepath).toContain(filename)
fs.promises.unlink(filepath)
})

