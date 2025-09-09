# 📱 GSMArena API Again

> **A modern, fast, and open-source API for GSMArena phone specs & search.**

---

## 🚀 Features

- ✅ All brands
- ✅ Devices by brand
- ✅ Device specs by ID
- ✅ Device specs by name *(new!)*
- ✅ Keyword search
- ✅ Top devices
- ✅ Hot deals
- ✅ Glossary & details
- ⏳ Advanced filters *(never coming)*
- ⏳ News *(nope)*
- ⏳ Reviews *(i can try adding this, dunno...)*

---

## ⚡ Quickstart

1. **Clone:**
   ```bash
   git clone https://github.com/adrieIgg/gsmarena-api-again
   cd gsmarena-api-again
   ```
2. **Install:**
   ```bash
   npm install
   ```
3. **Run:**
   ```bash
   npm start
   ```

> Your API server will be live at [http://localhost:3000](http://localhost:3000)

---

## 🔗 Endpoints

| Endpoint | Description | Example |
|----------|-------------|---------|
| `/catalog/brands` | List all brands | `curl http://localhost:3000/catalog/brands` |
| `/catalog/brands/:brandId` | Devices by brand | `curl http://localhost:3000/catalog/brands/apple-phones-48` |
| `/catalog/devices/:deviceId` | Device specs by ID | `curl http://localhost:3000/catalog/devices/apple_iphone_13_pro_max-11089` |
| `/catalog/devices/name/:deviceName` | Device specs by name | `curl http://localhost:3000/catalog/devices/name/iphone%2013%20pro%20max` |
| `/search?q=:keyword` | Search devices | `curl http://localhost:3000/search?q=casio` |
| `/top` | Top devices | `curl http://localhost:3000/top` |
| `/deals` | Hot deals | `curl http://localhost:3000/deals` |
| `/glossary` | Glossary | `curl http://localhost:3000/glossary` |
| `/glossary/:termId` | Glossary detail | `curl http://localhost:3000/glossary/xenon-flash` |

---

## 👤 Author & Credits

- Created by **Adriel** (aka [adriel.gg_motion](https://github.com/adrieIgg))
- Original API by [@nordmarin](https://github.com/nordmarin)

---

## 📄 License

**GSMArena API Again** is MIT licensed.

---

## Example Output

**Request:**
```
GET http://localhost:3000/search?q=s22
```

**Response:**
```
[
  {
    "id": "samsung_galaxy_s22_ultra_5g-11251",
    "name": "Samsung Galaxy S22 Ultra 5G",
    "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg",
    "description": "Samsung Galaxy S22 Ultra 5G Android smartphone. Announced Feb 2022. Features 6.8″  display, Exynos 2200 chipset, 5000 mAh battery, 1024 GB storage, 12 GB RAM, Corning Gorilla Glass Victus+."
  },
  {
    "id": "samsung_galaxy_s22_5g-11253",
    "name": "Samsung Galaxy S22 5G",
    "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg",
    "description": "Samsung Galaxy S22 5G Android smartphone. Announced Feb 2022. Features 6.1″  display, Exynos 2200 chipset, 3700 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass Victus+."
  },
  {
    "id": "samsung_galaxy_s22+_5g-11252",
    "name": "Samsung Galaxy S22+ 5G",
    "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-plus-5g.jpg",
    "description": "Samsung Galaxy S22+ 5G Android smartphone. Announced Feb 2022. Features 6.6″  display, Exynos 2200 chipset, 4500 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass Victus+."
  },
  {
    "id": "cat_s22_flip-11141",
    "name": "Cat S22 Flip",
    "img": "https://fdn2.gsmarena.com/vv/bigpic/cat-s22-flip.jpg",
    "description": "Cat S22 Flip Android smartphone. Announced Sep 2021. Features 2.8″  display, Snapdragon 215 chipset, 2000 mAh battery, 16 GB storage, 2 GB RAM, MIL-STD-810H compliant, Corning Gorilla Glass 5."
  },
  {
    "id": "philips_s220-1773",
    "name": "Philips S220",
    "img": "https://fdn2.gsmarena.com/vv/bigpic/philips-s220.gif",
    "description": "Philips S220 phone. Announced Oct 2006. Features CSTN, 65K colors display, 1000 mAh battery."
  }
]
```