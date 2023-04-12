// This function will help us to navigate to our URL

const puppeteer = require("puppeteer")


// This function is supposed to navigate to the gmail web browser
const login = async (page) => {
    await page.goto("https://mail.google.com/mail/u/0/#inbox", {waitUntil: "networkidle0"} )
    
    try {
        await page.waitForNavigation()
    } catch (error) {
        console.log(error);        
    }
}

const getContacts = async (page) => {
    await page.waitForSelector('a[title="Contacts"]')
    await page.click('a[title="Contacts"]')
}

const main = async () => {
    let browser = await puppeteer.launch({
        executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",
        headless: false,
    })

    let page = await browser.newPage()
    await page.setViewport({
        width: 1080,
        height: 700,
    })
}

main()