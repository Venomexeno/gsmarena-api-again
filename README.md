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