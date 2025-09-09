const puppeteer = process.env.NODE_ENV === 'production' 
    ? require('puppeteer-core') 
    : require('puppeteer');
const chromium = require('@sparticuz/chromium');

let browserInstance;

async function getBrowser() {
    if (browserInstance) {
        return browserInstance;
    }

    const isProduction = process.env.NODE_ENV === 'production';
    
    const launchOptions = isProduction 
        ? {
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
        }
        : {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        };

    try {
        console.log("Iniciando o navegador...");
        browserInstance = await puppeteer.launch(launchOptions);
        console.log("Navegador iniciado com sucesso.");
    } catch (error) {
        console.error("Não foi possível iniciar o navegador: ", error);
        throw error;
    }
    
    return browserInstance;
}

exports.getDataFromUrl = async (url) => {
    let page;
    try {
        const browser = await getBrowser();
        page = await browser.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36');
        await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });

        await page.goto(`https://www.gsmarena.com${url}`, {
            waitUntil: 'domcontentloaded',
        });

        const html = await page.content();
        return html;

    } catch (error) {
        console.error(`Erro ao buscar dados de https://www.gsmarena.com${url}:`, error.message);
        throw new Error('Failed to fetch data from URL.');
    } finally {
        if (page) {
            await page.close();
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
