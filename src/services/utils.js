const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');

let browserInstance;

async function getBrowser() {
    if (process.env.NODE_ENV === 'production' && browserInstance) {
        return browserInstance;
    }
    browserInstance = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
    });
    return browserInstance;
}

exports.getDataFromUrl = async (url) => {
    let browser;
    try {
        browser = await getBrowser();
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36');
        await page.setExtraHTTPHeaders({
            'Accept-Language': 'en-US,en;q=0.9'
        });
        await page.goto(`https://www.gsmarena.com${url}`, {
            waitUntil: 'networkidle2',
        });
        const html = await page.content();
        await page.close();
        return html;
    } catch (error) {
        if (browser && process.env.NODE_ENV !== 'production') {
            await browser.close();
            browserInstance = null;
        }
        throw new Error('Failed to fetch data from URL.');
    } finally {
        if (browser && process.env.NODE_ENV !== 'production') {
            await browser.close();
        }
    }
};

exports.getPrice = (text) => {
    if(!text) return { currency: null, price: null };
    const value = text.replace(',', '').split(' ');
    return {
        currency: value[0],
        price: parseFloat(value[1]),
    };
};