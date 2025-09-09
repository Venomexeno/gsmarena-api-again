const express = require('express');
const catalog = require('./src/services/catalog');
const deals = require('./src/services/deals');
const glossary = require('./src/services/glossary');
const search = require('./src/services/search');
const top = require('./src/services/top');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to gsmarena-api! Explore the various endpoints to get information about mobile devices, brands, deals, and more.',
        documentation: 'Read the README for more info.'
    });
});

app.get('/catalog/brands', async (req, res) => {
    try {
        const brands = await catalog.getBrands();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/catalog/brands/:brandId', async (req, res) => {
    try {
        const devices = await catalog.getBrand(req.params.brandId);
        res.json(devices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/catalog/devices/:deviceId', async (req, res) => {
    try {
        const device = await catalog.getDevice(req.params.deviceId);
        res.json(device);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// New route to find device by name here
app.get('/catalog/devices/name/:deviceName', async (req, res) => {
    try {
        const deviceName = req.params.deviceName;
        const searchResults = await search.search(deviceName);

        if (!searchResults || searchResults.length === 0) {
            return res.status(404).json({ message: 'No devices found with that name.' });
        }

        const deviceId = searchResults[0].id;
        const deviceDetails = await catalog.getDevice(deviceId);
        res.json(deviceDetails);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/search', async (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ error: 'O parâmetro de busca "q" é obrigatório.' });
    }
    try {
        const results = await search.search(q);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/deals', async (req, res) => {
    try {
        const dealsList = await deals.getDeals();
        res.json(dealsList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/glossary', async (req, res) => {
    try {
        const glossaryList = await glossary.get();
        res.json(glossaryList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/glossary/:termId', async (req, res) => {
    try {
        const term = await glossary.getTerm(req.params.termId);
        res.json(term);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Top route
app.get('/top', async (req, res) => {
    try {
        const topList = await top.get();
        res.json(topList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});